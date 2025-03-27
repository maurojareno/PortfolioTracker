import { Module } from '@nestjs/common';
import { StocksModule } from './stocks/stocks.module';
import { HoldingsModule } from './holdings/holdings.module';

@Module({
  imports: [StocksModule, HoldingsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
