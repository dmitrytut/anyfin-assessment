import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

import { CurrencyResult } from './interfaces/currency.interface';

@Injectable()
export class CurrencyService {
    private logger = new Logger(CurrencyService.name);

    constructor(private httpService: HttpService) {}

    /**
     * Get latest rates for the given currencies.
     *
     * @param {string} base Base currency.
     * @param {string[]} symbols Currency codes to limit output currencies.
     */
    async getLatestRatesForSymbols(base: string, symbols: string[]): Promise<CurrencyResult> {
        const request = await this.httpService
            .get<CurrencyResult>('/latest', {
                params: {
                    base,
                    symbols: symbols?.join(','),
                },
            })
            .pipe(map((response) => response.data));

        try {
            const data = await lastValueFrom(request);
            if (!data.success) {
                this.logger.warn(`Can't retrieve exchange rates for '${base}'`, data.error);
            }

            return data;
        } catch (e) {
            this.logger.error('Error while currencies retrieving', e.message);
        }
    }

    /**
     * Get latest rates between specified currency and SEK.
     *
     * @param {string} base Base currency.
     */
    async getLatestRateForSek(base: string): Promise<number> {
        const result = await this.getLatestRatesForSymbols(base, ['SEK']);

        return result?.rates?.['SEK'];
    }
}
