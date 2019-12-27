import { Component, OnInit, DoCheck} from '@angular/core';
import { teachbooks } from '../teachbooks';
import { books } from '../books';
declare var $: any;
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// tslint:disable-next-line:max-line-length
export class HeaderComponent implements OnInit, DoCheck {
  books = books;
  teachbooks = teachbooks;
  constructor() { }
  registered: 0;
  namer: 'kek';
  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function () {
      // tslint:disable-next-line: only-arrow-functions
      $('#myInput').on('keyup', function () {
        const value = $('#myInput').val().toLowerCase();
        if (value !== '') {
          $('#myList div').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
          });
        } else {
          $('#myList div').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > 1);
          });
        }
      }
      );
    });
  }
  ngDoCheck() {
    document.getElementById('unregistered').classList.toggle('unshown');
    if (localStorage.getItem('loginname')) {
      console.log('Есть ЛокалСторадж');
      const object = JSON.parse(localStorage.getItem('loginname'));
      const elem = 'name';
      const gender = 'gender';
      const namer = object[elem];
      const genderr = object[gender];
      const registered = 1;
      if (genderr === 'Женский') {
        console.log('Дивка');
        document.getElementById('loginwomanreg').classList.toggle('unshown');
      } else {
        console.log('Поцан');
        document.getElementById('loginmanreg').classList.toggle('unshown');
      }
      document.getElementById('logined').innerHTML = namer;
      console.log('Имя: ' + namer);
    } else {
      const registered = 0;
      document.getElementById('unregistered').classList.toggle('unshown');
      console.log('unregistered');
    }
    if (localStorage.getItem('loginname')) {
      if ($('#login')) {
        document.getElementById('registered').classList.toggle('unshown');
        $('#login').html(localStorage.getItem('loginname'));
      }
    }
  }
}


