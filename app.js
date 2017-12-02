const mongoConnection = require('./mongo/mongoConnection').connect;

console.log(process.argv);
if(process.argv[2] == 'create') {
	mongoConnection((err, db) => {
		if(err) throw err;
		console.log('connected to mongo');
		db.createCollection('students', (err, res) => {
			if (err) throw err;
			console.log('created collection');
			const student = {name : 'Shalitha', location : 'Gampaha'};
			db.collection('students').insertOne(student, (err, res) => {
				if(err) throw err;
				db.close();
			});
			
		});
	});
}
else if(process.argv[2] == 'show') {
	mongoConnection((err, db) => {
		if(err) throw err;
		console.log('connected to mongo');
		db.collection('students').find({}).toArray((err, res) => {
			if (err) throw err;
			console.log(res);
			db.close();
		});
	});
}