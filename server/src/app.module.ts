import { Module } from '@nestjs/common';
import { BaseController } from './base/base.controller';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [StocksModule],
  controllers: [BaseController],
  providers: [],
})
export class AppModule {}
