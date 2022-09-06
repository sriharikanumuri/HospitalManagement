import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { MaterialModule } from 'src/app/@shared/material/material.module';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';


@NgModule({
  declarations: [
    PatientComponent,
    AddPatientComponent,
    EditPatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule
  ],
  exports:[PatientComponent]
})
export class PatientModule { }
