import { Injectable, HttpException } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class AppService {
  async getPyhton(query): Promise<any> {
    try {
      var dataToSend;
      const path = require('path');
      const dirPath = path.join(__dirname, '../src/python/sum.py');
      const python = spawn('python', [dirPath, query.value1, query.value2]);

      var sum = new Promise(function(resolve, reject) {
        dataToSend = python.stdout.on('data', async data => {
          console.log('Pipe data from python script ...');

          resolve(data.toString());
        });
      });
      return sum.then(function(value) {
        console.log(value); // 1
        return value;
      });
    } catch (e) {
      console.log(e);
      throw new HttpException('Error', 500);
    }
  }
}
