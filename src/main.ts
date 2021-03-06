import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';

/**
 * Server start routine.
 */
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);

    console.log(`Server is running on: ${await app.getUrl()}`);
}
bootstrap();
