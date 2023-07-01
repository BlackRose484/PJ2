const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Notes = new Schema(
  {
    name: {type :String},
    deadline: {type: Date},
    des:{type: String},
    slug: { type: String, slug: 'name' },
  },
  {
    timestamps: true,
  },
);

Notes.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Notes', Notes);
