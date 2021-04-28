import { Component, OnInit } from '@angular/core';

let mensaje:any=document.getElementById("mensaje");
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}

