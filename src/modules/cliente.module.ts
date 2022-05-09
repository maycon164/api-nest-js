import { Module } from '@nestjs/common';
import { ClienteController } from 'src/controllers/cliente.controller';
import { ClienteService } from 'src/services/cliente.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from 'src/model/cliente.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cliente', schema: ClienteSchema }]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
