/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './application/core/modules/user/user.module';
import { AuthModule } from './application/core/modules/auth/auth.module';
import { AddressModule } from './application/core/modules/address/address.module';
import { ProductModule } from './application/core/modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: false,
      synchronize: true,
      migrations: ['src/application/infra/migration/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/application/infra/migrations',
        entitiesDir: 'src/application/core/domain/entity/**/*{.ts,.js}',
      },
    } as TypeOrmModule),
    UserModule,
    AuthModule,
    AddressModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
