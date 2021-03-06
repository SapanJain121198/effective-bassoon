import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';


export class TestReport{
  constructor(
  //  public reportId:any,
  //  public score:number,
  //  public testLevel:number,
  //  public testSubjectName:string,
  //  public dateAndTime:any,
  //  public registeredUser:any
  ){
  }
}

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  testReport : TestReport;
  subject : any;
  p:number=1;
  userId : string;
  searchtermSubject:string;
  searchtermstate:string;
  searchtermcity:string;
  searchname:string;
  data=[];

  constructor(private studentService: StudentService, private router : Router) { }

  ngOnInit():void {

    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);


    this.studentService.viewReports().subscribe
    (
      (response)=>
      {
        this.testReport= response;
       // console.log(this.testReport)
      },
      (error)=>
      {
        console.log("Error Occured"+error);
      }
    );
  }
  

  userLogout = function () {
    sessionStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }
  
 
    
  

}