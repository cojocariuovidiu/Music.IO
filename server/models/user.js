var mongoose    = require('mongoose');
var bcrypt      = require('bcryptjs');

let UserSchema  = new mongoose.Schema({
    firstName   : {
        type    : String,
        minlength: 3,
        required: [true, 'Please provide a first name']
    },
    lastName    : {
        type    : String,
        minlength: 3,
        required: [true, 'Please provide a last name']
    },
    email       : {
        type    : String,
        required: [true, 'Please provide a valid e-mail']
    },
    location    : {
        type    : String
    },
    description : {
        type    : String
    },
    password    : {
        type    : String,
        minlength: 8,
        required: [true, 'Please provide a valid password']
    }
}, { timestamps: true});

UserSchema.methods.hash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.pre('save', function(done){
    this.password = this.hash(this.password);
    done();
})

UserSchema.methods.authenticate = function(password_form, password){
    return bcrypt.compareSync(password_form, password);
}

mongoose.model("User", UserSchema)
var User = mongoose.model("User")