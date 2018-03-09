var mongoose    = require("mongoose");
var Student     = mongoose.model("Student");
var Lesson      = mongoose.model("Lesson");
var User        = mongoose.model("User");

class StudentController {

    createStudent(req, res){
        console.log("hitting sC in the bE");
        Lesson.findById(req.params.lesson_id, (err, question) => {
            var student = new Student (req.body);
            student._user   = req.session.user_id;
            student._lesson = req.session.lesson_id;
            lesson._answer.push(student);
            student.save((err) => {
                lesson.save((err) => {
                    if(err){
                        return res.json(err);
                    }
                    return res.json(student)
                })
            })
        })
    }

    showStudent(req, res){
        Student.find({})
        .populate({path: "user", model: "User"})
        .populate({path: "lesson", model: "Lesson"})
        .exec((err, students)=>{
            if(err){
                return res.json(err);
            }
            return res.json(students)
        })
    }
}

module.exports  = new StudentController();