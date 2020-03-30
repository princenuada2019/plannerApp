const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{value} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [
        {
            access: {
                type: String,
                require: true
            },
            token: {
                type: String,
                required: true
            }
        }
    ]
});

UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();

    return {_id: userObject._id, username: userObject.username, email: userObject.email};
}

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();

    user.tokens = user.tokens.concat([{access, token}]);

    return user.save().then(() => {
        return token;
    })

};

UserSchema.methods.removeToken = function(token) {
    var user = this;

    return user.updateOne({$pull: {tokens: {token}}});
};

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);        
    } catch(error) {
        return Promise.reject();
    }

    return User.findOne({
        _id: decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

UserSchema.statics.findByCredentials = function (email, password) {
    var User = this;

    return User.findOne({email}).then((user) => {        
        if(!user) {         
            return Promise.reject();
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (error, res) => {
                if(!res) {
                    reject();
                } else {
                    resolve(user);
                }
            })
        })
    });
};

UserSchema.pre('save', function(next) {
    var user = this;
    
    if(user.isModified('password')) {
        bcrypt.genSalt(10, (error, solt) => {
            bcrypt.hash(user.password, solt, (error, HashedPassword) => {
                user.password = HashedPassword;
                User.createIndexes();
                next();
            })
        });
    } else {
        User.createIndexes();
        next();
    }
});

var User = mongoose.model('User', UserSchema);


module.exports = {User}