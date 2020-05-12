import { Injectable, HttpException } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class AppService {
  async getPyhton(query): Promise<any> {
    try {
      var dataToSend;
      const path = require('path');
      const dirPath = path.join(__dirname, '../src/sum.py');
      const python = spawn('python', [dirPath, query.value1, query.value2]);

      dataToSend = await python.stdout.on('data', async data => {
        console.log('Pipe data from python script ...');

        return await data.toString();
      });
      python.stderr.on('data', data => {
        console.error(`child stderr:\n${data}`);
      });
      return  dataToSend;
    } catch (e) {
      console.log(e);
      throw new HttpException('Error', 500);
    }
  }
}
