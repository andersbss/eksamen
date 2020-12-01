import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

jest.setTimeout(600000);

let mockServer;

export const connectDatabase = async () => {
  mockServer = await MongoMemoryServer.create();

  const uri = await mockServer.getUri();

  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(uri, options, (err) => {
    if (err) console.log(err);
  });
};

export const closeDatabase = async (done) => {
  mongoose.disconnect(done);
  await mockServer.stop();
};

export const clearDatabase = async () => {
  const collections = await mongoose.connection.db.collections();

  for (const collection of collections) {
    await collection.deleteMany();
  }
};
