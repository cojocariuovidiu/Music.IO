var mongoose        = require("mongoose");
var _obSchema       = mongoose.Schema.Types.ObjectId,

var StudentSchema   = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Student's name should be longer than three characters"],
        required: [true, "Please provide a student's name"]
    },
    description: {
        type: String
    },
    level: {
        type: Number,
        default: 0
    },
    _user: {
        type: _obSchema,
        ref: "User",
        required: [true, "User not in session"]
    },
    _lesson: {
        type: _obSchema,
        ref: "Lesson",
        required: [true, "User not in session"]
    }
}, {timestamps: true});

mongoose.model("Student", StudentSchema);
var Student = mongoose.model("Student");