import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    {
      name: "Camiseta",
      price: "$80.000"
    },
    {
      name: "Pantalon",
      price: "$80.000"
    },
    {
      name: "Pokedex",
      price: "$80.000"
    },
    {
      name: "Bit-Vision",
      price: "$80.000"
    },
    {
      name: "Portatil BitSus",
      price: "$80.000"
    },
    {
      name: "Celular BitSung",
      price: "$80.000"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
