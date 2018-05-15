import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getBatches(){
    return this.http.get('https://pacific-coast-73069.herokuapp.com/batches/');
  }

  getCourses(){
    return this.http.get('https://pacific-coast-73069.herokuapp.com/courses/');
  }
  addCourse(newCourse: string){
    return this.http.post('https://pacific-coast-73069.herokuapp.com/courses/', {
      name: newCourse
    })
  }
  getCourseBatches(id: number){
    return this.http.get('https://pacific-coast-73069.herokuapp.com/courses/'+id+'/batches');
  }
  addCourseBatch(id: number, batchName: string){
    return this.http.post('https://pacific-coast-73069.herokuapp.com/courses/'+id+'/batches', {
      name: batchName
    })
  }
  getLectures(cid: number, bid:number){
    return this.http.get('https://pacific-coast-73069.herokuapp.com/courses/'+cid+'/batches/'+bid+'/lectures');
  }

  addLecture(bid: number, cid: number, subjectId: number, lectureName: string){
    return this.http.post('https://pacific-coast-73069.herokuapp.com/courses/'+cid+'/batches/'+bid+'/lectures', {
      name: lectureName,
      subjectId: subjectId
    })
  }

  getStudents(){
    return this.http.get('https://pacific-coast-73069.herokuapp.com/students');
  }
  getStudent(sid: number){
    return this.http.get('https://pacific-coast-73069.herokuapp.com/students/'+sid);
  }
  addStudent(studentName){
    return this.http.post('https://pacific-coast-73069.herokuapp.com/students', {
      name: studentName
    })
  }
  enrollStudent(sid, batchId){
    return this.http.post('https://pacific-coast-73069.herokuapp.com/students/'+sid+'/batches', {
      batchId: batchId
    })
  }
  getSubjects(){
    return this.http.get('https://pacific-coast-73069.herokuapp.com/subjects/');
  }

  addSubject(subjectName: string){
    return this.http.post('https://pacific-coast-73069.herokuapp.com/subjects/', {
      name: subjectName
    })
  }

  getTeachers(){
    return this.http.get('https://pacific-coast-73069.herokuapp.com/teachers/');
  }

  addTeacher(teacherName: string, subjectId: number){
    return this.http.post('https://pacific-coast-73069.herokuapp.com/teachers/', {
      name: teacherName,
      id: subjectId
    })
  }
}
