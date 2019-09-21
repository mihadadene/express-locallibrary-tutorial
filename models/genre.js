var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  { 
    name: { type: Schema.Types, ref: 'name', required: true, min: 3, max: 100 },
    status: {type: String, required: true, enum: ['fiction', 'non-fiction', 'romance', 'military history'], default: 'fiction'},
    }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);