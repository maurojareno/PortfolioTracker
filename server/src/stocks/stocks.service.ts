import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StocksService {
  create(createStockDto: CreateStockDto) {
    return 'This action adds a new stock';
  }

  findAll() {
    return `This action returns all stocks`;
  }

  async findSymbol(symbol: string) {
    const url = `https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=${symbol}&datatype=json`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6a7f498f1emsh4cc05b6ef4e4468p1dbddejsn3fb6e4bb01a5',
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
    return `This action returns a #${symbol} stock`;
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
