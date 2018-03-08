var mongoose    = require("mongoose");
var Lesson      = mongoose.model("Lesson");
var Student     = mongoose.model("Student");
var User        = mongoose.model("User");

class LessonController {

    create(req, res){
        console.log("hitting create at _lC");
        Lesson.create({ 
            lesson: req.body.title,
            description: req.body.description,
            _user: req.session.user_id }, (err, lesson) => {
                if(err){
                    return res.json(err);
                }
                return res.json(lesson);
            })
        }
    
    showAll(req, res){
        console.log("hitting showAll at _lC");
        Lesson.find({}, (err, lessons) => {
            return res.json(lessons);
        })
    }

    showOne(req, res){
        console.log("hitting showOne at _lC");
        Lesson.findById(req.params.id)
        .populate ({ path: "_user", model: "User" })
        .populate ({ path: "_student", model: "Student", populate: { path: "_user", model: "User"}})
        .exec(( err, lesson ) => {
            if(err){
                return res.json({ "error": "Not happening" })
            }
            // console.log();
            return res.json(lesson);
        })
    }
}

module.exports  = new LessonController();