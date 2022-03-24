import mongoose from 'mongoose';
import { config } from '../config/Constants';

export class MongoConnection {
    public async connect(): Promise<void> {
        await mongoose.connect(config.MONGO_CONNECTION).then(() => {
            console.log('database connect');
        }).catch(err => {
            console.log(err);
        });
    }
}