/**
 * Country api result model.
 *
 * In this implementation descried only fields that we are using.
 */
export interface CountryResult {
    name: {
        official: string;
    };
    population: number;
    currencies: Record<string, any>;
}
