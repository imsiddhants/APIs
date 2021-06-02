const mongoose = require('mongoose');

module.exports = mongoose.model('Rating', {
    VendorId:   {type: mongoose.Schema.ObjectId, ref: 'Vendor'},
    rating:     {type: Number, required: true},
    ratingId : {type: mongoose.Schema.ObjectId}

});