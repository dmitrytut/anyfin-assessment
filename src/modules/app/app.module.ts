import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ThrottlerModule } from '@nestjs/throttler';

import { CountryModule } from '../country/country.module';
import { CurrencyModule } from '../currency/currency.module';
import { AuthModule } from '../auth/auth.module';

/**
 * Root application module.
 */
@Module({
    imports: [
        // Register GraphQL module.
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            // Path to graphql schemas.
            typePaths: ['./**/*.graphql'],
            context: ({ req, res }) => ({ req, res }),
        }),
        // Register rate limiting.
        ThrottlerModule.forRoot({
            // The time to live in seconds for the request tracker.
            ttl: 60,
            // How many times an endpoint can be hit.
            limit: 30,
        }),
        AuthModule,
        CountryModule,
        CurrencyModule,
    ],
})
export class AppModule {}
