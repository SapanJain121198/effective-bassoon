import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { HomeComponent } from './home/home.component';
import {QuestionPaperComponent } from './question-paper/question-paper.component';
import { RegistrationComponent } from './registration/registration.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserReportComponent } from './user-report/user-report.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';

const routes: Routes = [

  {path: '', component:DashboardComponent, pathMatch:'full'},
  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'addquestion',component:AddQuestionComponent},
  {path:'selectexam',component: SelectExamComponent},
  {path:'startexam',component: StartExamComponent},
  {path:'questionpaper',component: QuestionPaperComponent},
  {path:'adminarea',component:AdminAreaComponent},
  {path:'viewreport',component:ViewReportComponent},
  {path:'searchstudent',component:SearchStudentComponent},
  {path:'displaystudent',component:DisplayStudentComponent},
  {path:'generatereport',component: GenerateReportComponent},
  {path:'removequestion',component:RemoveQuestionComponent},
  {path:'aboutus', component: AboutUsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'userreport', component:UserReportComponent},
  {path: 'resetpassword', component:ResetPasswordComponent},
  {path:'viewquestion',component:ViewQuestionComponent},
  {path:'updatequestion/:questionId',component:UpdateQuestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
