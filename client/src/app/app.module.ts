import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LessonComponent } from './lesson/lesson.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './user/user/login/login.component';
import { CreateComponent } from './lesson/create/create.component';
import { ListComponent } from './lesson/list/list.component';
import { ShowComponent } from './lesson/show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LessonComponent,
    StudentComponent,
    LoginComponent,
    CreateComponent,
    ListComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
