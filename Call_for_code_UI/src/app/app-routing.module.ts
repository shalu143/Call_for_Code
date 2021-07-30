import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterUploadComponent } from './after-upload/after-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [

  {path: "Upload", component: UploadComponent},
  {path: "After", component: AfterUploadComponent},
  {path: "", component: UploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
