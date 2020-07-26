import { Component, OnInit } from '@angular/core';
import { rooms, roomStatus } from 'src/app/staticData';
import { GlaobalVariableService } from 'src/app/services/glaobal-variable.service';

@Component({
  selector: 'app-room-status',
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.css']
})
export class RoomStatusComponent implements OnInit {

  rooms = rooms;
  selectedRoom:any;
  roomStatus = JSON.parse(JSON.stringify(roomStatus));
  roomTableContainer:any = [];
  filterdContainer: any = [];
  showTable = false;
  constructor(private globalVariable:GlaobalVariableService) { }

  ngOnInit() {
    console.log(this.roomStatus);
    this.roomStatus.forEach(element => {
      element.bookedRooms.forEach(cElement => {
        let obj = {};
        obj['id'] = element.id;
        obj['name'] = element.name;
        obj['roomDetails'] = cElement;
        this.roomTableContainer.push(obj);
      });
    });

    this.globalVariable.sharedData.subscribe(value=>{
      console.log(value);
      if(value !== null){
        this.roomTableContainer.unshift(value);
      }
    });

    this.filterdContainer = JSON.parse(JSON.stringify(this.roomTableContainer));

    console.log(this.filterdContainer);
  }

  onChangeEvent(event){
    this.showTable =true;
    this.filterdContainer = JSON.parse(JSON.stringify(this.roomTableContainer));
    console.log(event.target.value);
    this.filterdContainer =  this.filterdContainer.filter( e => e.id === JSON.parse(event.target.value));
  }

  deleteBooking(details){
    let value = confirm("Are you Sure, You want to delete?");
    if(value === true){
      this.filterdContainer = this.filterdContainer.filter( e => e.roomDetails.userName !== details.roomDetails.userName);
    }
  }

}
