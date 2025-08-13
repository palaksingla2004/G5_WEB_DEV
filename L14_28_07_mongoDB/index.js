const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
const db = client.db('test');
await db.collection('users').insertOne({ name: 'John' });
