const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name : String,
  address : String,
  phone : Number,
  Category : { type: mongoose.Schema.Types.ObjectId, ref: 'CategoryId' },
  SubCategory : { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategoryId' },
  ratings: {type: mongoose.Schema.ObjectId, ref: 'Rating'},

});


mongoose.model('vendor', VendorSchema);