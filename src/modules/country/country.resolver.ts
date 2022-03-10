import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { Currency } from '../../graphql.schema';
import { CurrencyService } from '../currency/currency.service';
import { GraphqlJwtAuthGuard } from '../auth/guards/gql-auth.guard';
import { GqlThrottlerGuard } from '../../common/guards/gql-throttle.guard';

import { CountryService } from './country.service';
import { CountryResult } from './interfaces/country.interface';

@Resolver('Country')
@UseGuards(GqlThrottlerGuard, GraphqlJwtAuthGuard)
export class CountryResolver {
    constructor(private readonly service: CountryService, private currencyService: CurrencyService) {}

    @Query('country')
    async country(@Args('name') name: string): Promise<CountryResult[]> {
        return this.service.findByName(name);
    }

    @ResolveField('name')
    async resolveName(@Parent() country: CountryResult): Promise<string> {
        return country.name?.official;
    }

    @ResolveField('currencies')
    async resolveCurrencies(@Parent() country: CountryResult): Promise<Currency[]> {
        return await Promise.all(
            Object.keys(country.currencies).map(async (symbol) => ({
                symbol,
                sekRate: await this.currencyService.getLatestRateForSek(symbol),
            })),
        );
    }
}
