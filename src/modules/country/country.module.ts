import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CurrencyModule } from '../currency/currency.module';

import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';

/**
 * Module for working with Countries.
 */
@Module({
    imports: [
        HttpModule.register({
            // In this implementation we use hardcoded constant, in a
            // production ready app we should use env vars for it.
            baseURL: 'http://restcountries.com/v3.1',
        }),
        CurrencyModule,
    ],
    providers: [CountryResolver, CountryService],
    exports: [CountryService],
})
export class CountryModule {}
