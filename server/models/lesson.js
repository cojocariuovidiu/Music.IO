var mongoose        = require("mongoose");

var LessonSchema      = new mongoose.Schema({
    title: {
        type: String,
        minlength: [5, "You must provide a title name"],
        required: [true, "Please provide a title"]
    },
    description: {
        type: String,
        minlength: [5, "You must provide a title description"],
        required: [true, "Please provide a description"]
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User not logged in"]
    },
    _student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: [true, "User not logged in"]
    }]
}, { timestamps: true })

mongoose.model("Lesson", LessonSchema)
var Lesson = mongoose.model("Lesson")