import { Component, OnInit } from '@angular/core';
import { SedesService } from '../sedes.service';
@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  constructor(private service:SedesService) { }

  ngOnInit(): void {
    this.service.getUsers();
  }

}
