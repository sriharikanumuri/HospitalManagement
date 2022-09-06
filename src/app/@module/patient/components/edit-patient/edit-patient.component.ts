import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss','../add-patient/add-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  constructor(public dialog :MatDialog) { }

  ngOnInit(): void {
  }

}

