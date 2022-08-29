import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from 'src/app/disciplinas.service';

@Component({
  selector: 'app-lista-disciplinas',
  templateUrl: './lista-disciplinas.component.html',
  styleUrls: ['./lista-disciplinas.component.css']
})
export class ListaDisciplinasComponent implements OnInit {
  users:any;
  selectedOption =0;
  
  actions = [{id:0, name:'Ordenar por:'},
            {id:1, name:'Alfabético Descendiente de A a Z'},
            {id:2, name:'Alfabético Ascendiente de Z a A'}]

  constructor(private service: DisciplinasService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
       this.users=Array.from(Object.values(data))[4] ; //se saca el arreglo
    });;
  }

}
