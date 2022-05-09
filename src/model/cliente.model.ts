import * as mongoose from 'mongoose';

export const ClienteSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export interface Cliente {
  _id: number;
  name: string;
  email: string;
}
