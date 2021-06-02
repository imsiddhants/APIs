// Set up a schema and model to match result structure
var vendorResultSchema = new Schema({
    "_id": { "type": Schema.Types.ObjectId, "ref": "Vendor" },
    "avgRating": Number
});

Rating.aggregate(
    [
        { "$group": {
            "_id": "$vendorId",
            "avgRating": { "$avg": { "$ifNull": ["$rating",0 ] } }    
        }}
    ],
    function(err,results) {
        if (err) throw err;

        // Map plain results to mongoose document objects
        results = results.map(function(result) {
            return new VendorResult(result);
        });

        Vendor.populate(results,{ "path": "_id" },function(err,results) {
            if (err) throw err;
            reply(results);
            console.log( JSON.stringify( results, undefined, 2 ) );
        })
    }
);