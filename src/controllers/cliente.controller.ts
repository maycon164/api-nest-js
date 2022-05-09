import { Body, Controller, Get, Post, Req, Param, Put } from '@nestjs/common';
import { Cliente } from 'src/model/cliente.model';
import { Request } from '@nestjs/common';
import { ClienteService } from 'src/services/cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly repository: ClienteService) {}

  @Get()
  //@HttpCode(201)
  findAll(): Promise<Cliente[]> {
    const clientes = this.repository.getAllClientes();
    return clientes;
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Cliente> {
    const cliente = await this.repository.getClienteById(id);
    return cliente;
  }

  @Post()
  async createCliente(
    @Req() request: Request,
    @Body() body: Cliente,
  ): Promise<Cliente> {
    const clienteInserted = this.repository.insertCliente(body);
    return clienteInserted;
  }

  @Put('/:id')
  async updateCliente(
    @Body() cliente: Cliente,
    @Param('id') id: string,
  ): Promise<Cliente> {
    const clienteUpdated = this.repository.updateById(id, cliente);
    return clienteUpdated;
  }
}
