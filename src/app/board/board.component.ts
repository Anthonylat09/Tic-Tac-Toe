import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] = [];
  xIsNext: boolean = false;
  winner: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
  }

}