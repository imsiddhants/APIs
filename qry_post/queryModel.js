
var mongoose = require('mongoose');
var User = mongoose.model('User');

var QuerySchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  likesCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});



QuerySchema.methods.updateFavoriteCount = function() {
  const query = this;

  return User.count({likes: {$in: [query._id]}}).then(function(count){
    query.likesCount = count;

    return query.save();
  });
};

QuerySchema.methods.toJSONFor = function(user){
  return {
    title: this.title,
    description: this.description,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    liked: user ? user.isLiked(this._id) : false,
    likesCount: this.likesCount,
    author: this.author.toProfileJSONFor(user)
  };
};

const Query = mongoose.model('Query',QuerySchema);
module.exports = Query

