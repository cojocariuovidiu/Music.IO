import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LessonComponent } from './lesson/lesson.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './lesson/create/create.component';
import { ListComponent } from './lesson/list/list.component';
import { ShowComponent } from './lesson/show/show.component';
import { UserService } from './server/controllers/user.service';
import { LessonService } from './server/controllers/lesson.service';
import { StudentService } from './server/controllers/student.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './user/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LessonComponent,
    StudentComponent,
    LoginComponent,
    CreateComponent,
    ListComponent,
    ShowComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    UserService,
    LessonService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
