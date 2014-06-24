var Objectdata = require('./models/object');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all objectdatas
	app.get('/api/objectdatas', function(req, res) {


		Objectdata.find(function(err, objectdatas) {


			if (err)
				res.send(err)

			res.json(objectdatas);
		});
	});

	// create data and send back all datas after creation
	app.post('/api/objectdatas', function(req, res) {

		// create a data,
		Objectdata.create({
			name:    		req.body.name,
		    time:   		new Date(),
		    temperature: 	req.body.temperature,
		    humidity: 		req.body.humidity,
		    sound: 			req.body.sound,
		    light: 			req.body.light,
		    movement : 		req.body.movement
		}, function(err, objectdata) {
			if (err)
				res.send(err);

			// get and return all the datas after you create another
			Objectdata.find(function(err, objectdatas) {
				if (err)
					res.send(err)
				res.json(objectdatas);
			});
		});

	});

	// delete a data
	app.delete('/api/objectdatas/:object_id', function(req, res) {
		Objectdata.remove({
			_id : req.params.object_id
		}, function(err, objectdata) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Objectdata.find(function(err, objectdatas) {
				if (err)
					res.send(err)
				res.json(objectdatas);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};