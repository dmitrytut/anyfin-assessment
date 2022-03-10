/**
 * Currency api result model.
 *
 * In this implementation descried only fields that we are using.
 */
export interface CurrencyResult {
    success: boolean;
    base: string;
    rates?: Record<string, number>;
    error?: {
        info: string;
    };
}
