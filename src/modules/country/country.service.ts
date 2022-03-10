import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

import { CountryResult } from './interfaces/country.interface';
import * as https from 'https';

@Injectable()
export class CountryService {
    private logger = new Logger(CountryService.name);

    constructor(private httpService: HttpService) {}

    /**
     * Find country by name.
     *
     * @param {string} name Country name or part of the name.
     */
    async findByName(name: string): Promise<CountryResult[]> {
        const request = await this.httpService
            .get<CountryResult[]>(`/name/${name}`)
            .pipe(map((response) => response.data));

        try {
            return lastValueFrom(request);
        } catch (e) {
            this.logger.error(`Error while retrieving countries. Query: '${name}'`, e.message);

            return [];
        }
    }
}
