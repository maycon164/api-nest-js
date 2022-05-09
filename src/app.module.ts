import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ClienteModule } from './modules/cliente.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClienteModule,
    //hard code connection - connection with mongoose
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/clientes'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
