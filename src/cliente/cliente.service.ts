import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente, ClienteDocument } from 'src/cliente/schemas/cliente.schema';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel('Cliente')
    private readonly clienteModel: Model<ClienteDocument>,
  ) {}

  async insertCliente(cliente: Cliente): Promise<Cliente> {
    const clienteInserted = await this.clienteModel.create(cliente);
    return clienteInserted;
  }

  async getAllClientes(): Promise<Cliente[]> {
    try {
      const allClientes = await this.clienteModel.find();
      if (allClientes.length == 0) throw new Error('Empty List!!!');
      return allClientes;
    } catch (error) {
      throw new NotFoundException('Could not find the Clientes.');
    }
  }

  async getClienteById(id: string): Promise<Cliente> {
    try {
      const cliente = await this.clienteModel.findById(id);
      return cliente;
    } catch (error) {
      throw new NotFoundException('Could not find Cliente with id: ' + id);
    }
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
