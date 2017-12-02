const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://mongotest:mongotest@test-mongo-shard-00-00-avc5z.mongodb.net:27017,test-mongo-shard-00-01-avc5z.mongodb.net:27017,test-mongo-shard-00-02-avc5z.mongodb.net:27017/test?ssl=true&replicaSet=test-mongo-shard-0&authSource=admin';

module.exports.connect = (callback) => {
	MongoClient.connect(dbUrl, callback);
};
