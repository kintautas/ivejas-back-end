import { Document } from 'mongoose';

export interface Order extends Document {
  readonly products:string[];
}