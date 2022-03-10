/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Country {
    name: string;
    population: number;
    currencies: Currency[];
}

export interface IQuery {
    country(name: string): Country[] | Promise<Country[]>;
}

export interface Currency {
    symbol: string;
    sekRate?: Nullable<number>;
}

type Nullable<T> = T | null;
