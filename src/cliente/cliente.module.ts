import { Module } from '@nestjs/common';
import { ClienteController } from 'src/cliente/cliente.controller';
import { ClienteService } from 'src/cliente/cliente.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cliente, ClienteSchema } from 'src/cliente/schemas/cliente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cliente.name, schema: ClienteSchema }]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
