const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    connectedUsers:[{
        type : Schema.Types.ObjectId,
        ref : "ConnectedUser"
    }]
})
module.exports = mongoose.model("User",UserSchema)


const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ConnectedUsersSchema = new Schema({
    connectedWith: {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})

module.exports = mongoose.model("ConnectedUser",ConnectedUsersSchema);