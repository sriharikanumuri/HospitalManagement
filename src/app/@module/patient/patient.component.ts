import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  tabledata = [
    { name: "Patient One", age: 23, gender: "Male", DateOfAdmint: "1/2/2022" },
    { name: "Patient One", age: 23, gender: "Male", DateOfAdmint: "1/2/2022" },
    { name: "Patient One", age: 23, gender: "Male", DateOfAdmint: "1/2/2022" },
    { name: "Patient One", age: 23, gender: "Male", DateOfAdmint: "1/2/2022" },
    { name: "Patient One", age: 23, gender: "Male", DateOfAdmint: "1/2/2022" },
     { name: "Patient One", age: 23, gender: "Male", DateOfAdmint: "1/2/2022" }, 
     { name: "Patient One", age: 23, gender: "Male", DateOfAdmint: "1/2/2022" }
  ]
  constructor(public dialog: MatDialog) {

  }


  ngOnInit(): void {
  }

  onclickopendialog() {
    this.dialog.open(AddPatientComponent, {
      panelClass: "pop-up",
      minWidth: "140px",
      minHeight: "100px"
    })

  }
  onclickeditdialog() {
    this.dialog.open(EditPatientComponent), {
      panelClass: "pop-up",
      minWidth: "320px",
      minHeight: "170px"
    }
  }


}
