// In a production-ready app we should implement more sophisticated configuration mechanism.
export const secret = process.env.JWT_SECRET || 'secret';
export const expiresIn = process.env.JWT_EXPIRATION_TIME || 60 * 60;
