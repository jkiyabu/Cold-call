import { Component, OnInit } from '@angular/core';
import {CallService} from '../call.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CallService]
})
export class CalendarComponent implements OnInit {
  appointments;

  constructor(private callService: CallService) { }

  ngOnInit() {

  }
  // refreshAppointments() {
  // this.callService.loadAppointments().then((newAppointments) => {
  //   this.appointments.splice(0, this.appointments.length);
  //   this.appointments.push.apply(this.appointments, newAppointments);
  // });
 // }

}
