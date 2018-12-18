"use strict"
var assert = require("assert");
var express = require("express");
var async = require("async");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
let cors = require("cors")
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
	let db = client.db("TROC");
	assert.equal(null, err);
	
	app.get("/users", (req, res) => {
		db.collection("users").find().toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			}
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
		
	});

	app.get("/services", (req, res) => {
		db.collection("services").find().toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			}
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
		
	});

	app.get("/users/:nom", (req, res) => {
		db.collection("users").find({"nom":req.params.nom}).toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			}
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
		
	});

	app.get("/biens/:type", (req, res) => {
		db.collection("biens").find({"type":req.params.type}).toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			}
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
		
	});

	app.get("/biens/prix/:prixNeuf", (req, res) => {
		db.collection("biens").find({"prixNeuf":{$gt : parseInt(req.params.prixNeuf)}}).toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			}
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
		
	});

	app.get("/services/type/:type", (req, res) => {
		db.collection("services").find({"type":req.params.type}).toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			}
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
		
	});

	app.get("/services/type/:type", (req, res) => {
		db.collection("services").find({"type":req.params.type}).toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			}
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
		
	});


    // Ajout d'user par requête post
    app.post("/users", (req, res) => {
    	res.setHeader("Access-Control-Allow-Origin", "*");
    	res.setHeader("Content-type", "text/raw");  
    	try {
    		db.collection("users").insertOne(req.body);
    		res.end("Insertion réussie");       
    	}
    	catch(e) {
    		res.end("Error "+e);
    	}
    });

    app.get("/biens/:nom", (req, res) => {
    	db.collection("biens").find({"nom":req.params.nom}).toArray((err, documents)=> {
    		let collectionPreteurs = [];
    		res.setHeader("Access-Control-Allow-Origin", "*");
    		res.setHeader("Content-type", "application/json");
    		let nbResultats = documents.length;
    		let numResultats = 0;
    		for (let doc of documents) {
    			db.collection("users").find({"email":doc.preteur}).toArray((err, documents)=> {
    				collectionPreteurs.push(documents[0]);
    				numResultats++;
    				if (numResultats == nbResultats) res.end(JSON.stringify(collectionPreteurs));
    			});
    		}
    	}); 
    });

    app.get("/biens/motClef/:motsClef", (req, res) => {
    	res.setHeader("Access-Control-Allow-Origin", "*");
    	res.setHeader("Content-type", "application/json");
    	let keywords = req.params.motsClef.split("+")
    	let json = [];
    	keywords.forEach( function(keyword) {

    		let numResultatsB = 0;
    		let numResultatsS = 0;
    		let nbResultatsS = -1;
    		let nbResultatsB = -1;

    		db.collection("descriptifBiens").find({"motClef":keyword}).toArray((err, documents)=> {
    			documents.push(".")
    			nbResultatsB = documents.length

    			for (let doc of documents) {
    				json.push(doc);
    				numResultatsB++;
    				if (numResultatsB == nbResultatsB) {
    					db.collection("descriptifServices").find({"motClef":keyword}).toArray((err, documents)=> {
    						nbResultatsS = documents.length
    						for (let doc of documents) {
    							json.push(doc);
    							numResultatsS++;


    							if (numResultatsS == nbResultatsS){
    								res.end(JSON.stringify(json));
    							}
    						}
    					})
    				}
    			}

    		})
    	})

    })

    app.post("/services", (req, res) => {
    	for (let prop in req.body) {
    	}
    	res.setHeader("Access-Control-Allow-Origin", "*");
    	res.setHeader("Content-type", "text/raw");  
    	try {
    		req.body.prix = parseInt(req.body.prix);
    		db.collection("services").insertOne(req.body);
    		res.end("Insertion réussie");       
    	}
    	catch(e) {
    		res.end("Error "+e);
    	}
    });


    app.post("/biens", (req, res) => {
    	for (let prop in req.body) {
    	}
    	res.setHeader("Access-Control-Allow-Origin", "*");
    	res.setHeader("Content-type", "text/raw");  
    	try {
    		req.body.prixNeuf = parseInt(req.body.prixNeuf);
    		db.collection("biens").insertOne(req.body);
    		res.end("Insertion réussie");       
    	}
    	catch(e) {
    		res.end("Error "+e);
    	}
    });

    app.post("/biens/delete", (req, res) => {
    	try {
    		let idBien = parseInt(req.body.idBien);
    		db.collection("biens").deleteOne({"idBien": idBien});
    		res.end("Suppression réussie");
    	} catch(e) {
    		res.end("Erreur de suppression"+e);
    	}
    });

    app.get("/biens/motsClef/:motsClef", (req, res) => {
    	res.setHeader("Access-Control-Allow-Origin", "*");
    	res.setHeader("Content-type", "application/json");
    	let keywords = req.params.motsClef.split("+");
    	let json = [];

    	keywords.forEach(function(keyword) {

    		async.series([

    			function(callback) {
    				db.collection("descriptifBiens").find({"motClef":keyword}).toArray((err, documents)=> {
    					for (let doc of documents) {
    						json.push(doc);
    					}
    				})
    			}, 

    			function(callback) {
    				db.collection("descriptifServices").find({"motClef":keyword}).toArray((err, documents)=> {
    					for (let doc of documents) {
    						json.push(doc);
    					}
    				})
    			}, 

    			function () {
    				res.end(JSON.stringify(json));
    			}


    			])


    	})


    })

});

app.listen(8888);