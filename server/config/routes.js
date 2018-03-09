var User    = require('../controllers/userController');
var Lesson  = require('../controllers/lessonController');
var Student = require('../controllers/studentController');

module.exports  = function(app){
    /********** USER **********/ 

    app.post    ("/user",               User.create);
    app.get     ("/session",            User.session);
    app.post    ("/login",              User.login);
    app.get     ("/users",              User.show);
    app.delete  ("/user",               User.logout);

    /********** LESSON **********/ 

    app.post    ("/lesson/new",         Lesson.create);
    app.get     ("/lessons",            Lesson.showAll);
    app.get     ("/lesson/:id",         Lesson.showOne);

    /********** STUDENT **********/ 

    app.post    ("/student/:lesson_id", Student.createStudent);
    app.get     ("/student/:id",        Student.showStudent)

    app.all('*', ( req,res, next ) =>{
        res.sendFile(path.resolve('./client/dist/index.html'));
    });
}