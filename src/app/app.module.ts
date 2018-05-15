import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { BackComponent } from './back/back.component';
import { CourseBatchComponent } from './course-batch/course-batch.component';
import { AddCourseBatchComponent } from './add-course-batch/add-course-batch.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';
import { BatchesComponent } from './batches/batches.component';
import { LecturesComponent } from './lectures/lectures.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    SubjectsComponent,
    TeachersComponent,
    HomeComponent,
    AddCourseComponent,
    BackComponent,
    CourseBatchComponent,
    AddCourseBatchComponent,
    AddSubjectComponent,
    AddTeacherComponent,
    AddStudentComponent,
    StudentDetailComponent,
    EnrollStudentComponent,
    BatchesComponent,
    LecturesComponent,
    AddLectureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'batches', component: BatchesComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id/:name/batches', component: CourseBatchComponent },
      { path: 'courses/:id/:name/batches/add', component: AddCourseBatchComponent },
      { path: 'courses/add', component: AddCourseComponent },
      { path: 'lectures/view/:cid/:bid/:bname', component: LecturesComponent },
      { path: 'lectures/add/:cid/:bid/:bname', component: AddLectureComponent },
      { path: 'subjects',  component: SubjectsComponent},
      { path: 'subjects/add',  component: AddSubjectComponent},
      { path: 'students', component: StudentsComponent },
      { path: 'students/add', component: AddStudentComponent },
      { path: 'students/detail/:id', component: StudentDetailComponent },
      { path: 'students/enroll/:id/:name', component: EnrollStudentComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'teachers/add', component: AddTeacherComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ]) 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
