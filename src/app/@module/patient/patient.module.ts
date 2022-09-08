import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { MaterialModule } from 'src/app/@shared/material/material.module';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientComponent,
    AddPatientComponent,
    EditPatientComponent,
    DeletePatientComponent,
    PatientHistoryComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,ReactiveFormsModule,
    MaterialModule
  ],
  exports:[PatientComponent]
})
export class PatientModule { }
