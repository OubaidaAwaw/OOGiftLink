  // import mongo client form mongodb
import  { MongoClient }  from 'mongodb'

  // import env
import dotenv from 'dotenv'

  // config env variables
dotenv.config()

  // declare client
let client = new MongoClient(process.env.MONGO_DB_URI, { maxPoolSize: 10 });
let database

const initializeDatabase = async () => {
  try {
      // connect Client with DB
    await client.connect();
    database = client.db('GiftLinks');
      // check about client
    if (!client.topology?.isConnected() || !database) {
      throw new Error('Failed to connect to the database');
    }
    console.log('✅ Successfully connected to DataBase'); // for dev
  } catch (err) {
    console.error('❌ Failed to connect to the database:', err);
      // end async process because conncetion error
    process.exit(1);
  }
}

const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized. Call initializeDatabase first.');
  }
  return database;
}

  // pass client variable
const getClient = () => {
  if (!client) {
    throw new Error('Database client is not initialized. Call initializeDatabase first.');
  }
  return client;
}

export {
  getClient,
  getDatabase,
  initializeDatabase,
}