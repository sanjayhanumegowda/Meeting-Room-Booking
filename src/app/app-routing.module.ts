import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingRoomPageComponent } from './pages/booking-room-page/booking-room-page.component';
import { RoomStatusComponent } from './pages/room-status/room-status.component';
import { RoomStatusByTimeComponent } from './pages/room-status-by-time/room-status-by-time.component';

const routes: Routes = [
  {path: '', redirectTo: 'meetingRoomBooking', pathMatch: 'full'},
  { path: 'meetingRoomBooking', component: BookingRoomPageComponent},
  {path: 'roomStatus', component:RoomStatusComponent},
  {path: 'roomStatusByTime', component:RoomStatusByTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
