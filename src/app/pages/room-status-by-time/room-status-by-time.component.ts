import { Component, OnInit } from '@angular/core';
import { rooms, roomStatus } from 'src/app/staticData';
import { GlaobalVariableService } from 'src/app/services/glaobal-variable.service';

@Component({
  selector: 'app-room-status-by-time',
  templateUrl: './room-status-by-time.component.html',
  styleUrls: ['./room-status-by-time.component.css']
})
export class RoomStatusByTimeComponent implements OnInit {
  rooms = rooms;
  timeFrom:any;
  timeTo:any;
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

  search(){
    this.showTable =true;
    this.filterdContainer = JSON.parse(JSON.stringify(this.roomTableContainer));
    if(this.timeFrom && this.timeTo){
      let tempArr = [];
      this.filterdContainer.forEach(element => {
      if((parseInt(element.roomDetails.timeFrom) >= parseInt(this.timeFrom)) && (parseInt(element.roomDetails.timeTo) <= parseInt(this.timeTo))){
       element['status'] = 'In-Use';
        tempArr.push(element);
      }
      else{
        element['status'] = 'Booked';
        tempArr.push(element);
      }
      });
      this.filterdContainer = tempArr;
    }
  }

  deleteBooking(details){
    let value = confirm("Are you Sure, You want to delete?");
    if(value === true){
      this.filterdContainer = this.filterdContainer.filter( e => e.roomDetails.userName !== details.roomDetails.userName);
    }
  }

}
