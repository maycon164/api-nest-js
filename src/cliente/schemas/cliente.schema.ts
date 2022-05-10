import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClienteDocument = Cliente & Document;

@Schema()
export class Cliente {
  @Prop()
  name: string;
  @Prop()
  email: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
