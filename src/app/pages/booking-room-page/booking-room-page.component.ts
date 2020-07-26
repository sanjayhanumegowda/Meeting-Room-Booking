import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { rooms } from 'src/app/staticData';
import { GlaobalVariableService } from 'src/app/services/glaobal-variable.service';
import { element } from 'protractor';
import { Router } from '@angular/router';

export function ValidateDate(control: AbstractControl) {
  let day = new Date(control.value).getUTCDay();
  if (day === 0 || day === 6) {
    return { ValidateDate: true };
  }
  return null;
}

export function ValidateTimeTo(control: AbstractControl) {
  console.log(control.value);
  let hours = control.value.split(":")[0];
  let minutes = control.value.split(":")[1];
  console.log(hours);
  if (hours != '') {
    if (hours < '09') {
      return { ValidateTimeTo: true };
    }
    else if (hours >= '18') {
      if (minutes > '00') {
        return { ValidateTimeTo: true };
      }
    }
  }
  return null;
}

export function ValidateTimeFrom(control: AbstractControl) {
  console.log(control.value);
  let hours = control.value.split(":")[0];
  let minutes = control.value.split(":")[1];
  console.log(hours);
  if (hours != '') {
    if (hours < '09' || hours >= '18') {
      return { ValidateTimeFrom: true };
    }
  }
  return null;
}


@Component({
  selector: 'app-booking-room-page',
  templateUrl: './booking-room-page.component.html',
  styleUrls: ['./booking-room-page.component.css']
})
export class BookingRoomPageComponent implements OnInit {

  meetingRoom: FormGroup;
  min = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  max = new Date().getUTCDay();
  submitted = false;

  rooms = rooms;

  constructor(private formBuilder: FormBuilder, private globalVariable: GlaobalVariableService,
    private router:Router) { }

  ngOnInit() {
    console.log(this.min, this.max);
    this.meetingRoom = this.formBuilder.group({
      userName: ['', Validators.required],
      room: ['', Validators.required],
      date: ['', [Validators.required, ValidateDate]],
      timeFrom: ['', [Validators.required, ValidateTimeFrom]],
      timeTo: ['', [Validators.required, ValidateTimeTo]],
      agenda: ['']
    });
  }

  get f() {
    return this.meetingRoom.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.meetingRoom.controls.room.value);

    // stop here if form is invalid
    if (!this.meetingRoom.invalid) {
      let obj = {};
      let roomDetails = {
        date: this.meetingRoom.controls.date.value,
        reason: this.meetingRoom.controls.agenda.value,
        timeFrom: this.meetingRoom.controls.timeFrom.value,
        timeTo: this.meetingRoom.controls.timeTo.value,
        userName: this.meetingRoom.controls.userName.value
      }
      this.rooms.forEach(element => {
        if (element.id === parseInt(this.meetingRoom.controls.room.value)) {
          obj['id'] = element.id;
          obj['name'] = element.name;
        }
      });
      obj['roomDetails'] = roomDetails;
      this.globalVariable.setData(obj);
      alert('SUCCESS!! :-)');
      this.router.navigate(['roomStatus']);
    }
    else {
      return;
    }
  }

}
