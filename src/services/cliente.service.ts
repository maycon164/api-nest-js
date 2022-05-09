import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from 'src/model/cliente.model';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel('Cliente') private readonly clienteModel: Model<Cliente>,
  ) {}

  async insertCliente(cliente: Cliente): Promise<Cliente> {
    const clienteInserted = await this.clienteModel.create(cliente);
    return clienteInserted;
  }

  async getAllClientes(): Promise<Cliente[]> {
    const allClientes = await this.clienteModel.find();
    return allClientes;
  }

  async getClienteById(id: string): Promise<Cliente> {
    const cliente = await this.clienteModel.findById(id);
    return cliente;
  }

  async updateById(id: string, cliente: Cliente): Promise<Cliente> {
    const clienteUdpated = await this.clienteModel.findOneAndUpdate(
      { id },
      cliente,
      { new: true },
    );

    return clienteUdpated;
  }
}
