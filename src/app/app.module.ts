import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingRoomPageComponent } from './pages/booking-room-page/booking-room-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomStatusComponent } from './pages/room-status/room-status.component';
import { RoomStatusByTimeComponent } from './pages/room-status-by-time/room-status-by-time.component';
import { GlaobalVariableService } from './services/glaobal-variable.service';

@NgModule({
  declarations: [
    AppComponent,
    BookingRoomPageComponent,
    RoomStatusComponent,
    RoomStatusByTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GlaobalVariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
