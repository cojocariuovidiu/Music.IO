var mongoose        = require("mongoose");

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
        type: String,
        default: 0
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User not in session"]
    },
    _lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
        required: [true, "User not in session"]
    }
}, {timestamps: true});

mongoose.model("Student", StudentSchema);
var Student = mongoose.model("Student");