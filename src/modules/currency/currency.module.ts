import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CurrencyService } from './currency.service';

/**
 * Module for working with Currencies.
 */
@Module({
    imports: [
        HttpModule.register({
            // In this implementation we use hardcoded constant, in a
            // production ready app we should use env vars for it.
            baseURL: 'http://data.fixer.io/api/',
            params: {
                access_key: process.env.API_KEY || '4c4d5a3740a88624af6bb83df99375a3',
            },
        }),
    ],
    providers: [CurrencyService],
    exports: [CurrencyService],
})
export class CurrencyModule {}
