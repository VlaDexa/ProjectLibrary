import { Component, OnInit } from '@angular/core';
import { teachbooks } from '../teachbooks';
import { books } from '../books';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books = books;
  teachbooks = teachbooks;
  constructor() { }

  ngOnInit() {
  }

}
