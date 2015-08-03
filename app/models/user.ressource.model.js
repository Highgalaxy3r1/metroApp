'use strict';

// Module dependencies.

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Schema for Ressources

var RessourceSchema = new Schema({

	'zipcode': {
		type: String,
		trim: true,
		default: ''
	}
})