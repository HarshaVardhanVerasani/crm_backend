const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true, // it will covert the email into the lower case and then store in the db,
        minLength: 10,  // anything less than 10 will fail
        unique: true

    },
    createdAt: {
        // I want to default to a new date
        type: String,
        immutable: true,  // This will ensure the createdAt column is never updated but once in the start
        default: () => {
            return new Date().toLocaleString().toString();
        }
    },
    updatedAt: {
        type: String,
        default: () => {
            return new Date().toLocaleString().toString();
        }
    },
    userType: {
        type: String,
        required: true,
        default: "CUSTOMER"
    },
    userStatus: {
        type: String,
        required: true,
        default: "APPROVED"
    },
    ticketsCreated : {
        type : [mongoose.SchemaTypes.ObjectId],
        ref : "Ticket"
    },
    ticketsAssigned : {
        type : [mongoose.SchemaTypes.ObjectId],
        ref : "Ticket"
    }

})


module.exports = mongoose.model("User", userSchema);

