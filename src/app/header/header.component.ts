import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
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
    if (localStorage.getItem('loginname')) {

      const object = JSON.parse(localStorage.getItem('loginname'));
      const elem = 'name';
      const gender = 'gender';
      const namer = object[elem];
      const genderr = object[gender];
      if (genderr === 'Женский') {
        document.getElementById('loginwomanreg').classList.toggle('unshown');
      } else {
        document.getElementById('loginmanreg').classList.toggle('unshown');
      }
      document.getElementById('logined').innerHTML = namer;
    }
    window.addEventListener('load', function () {
      if (localStorage.getItem('loginname')) {
        if ($('#login')) {
          document.getElementById('registered').classList.toggle('unshown');
          $('#login').html(localStorage.getItem('loginname'));
        }
      } else {
        document.getElementById('unregistered').classList.toggle('unshown');
      }
    });
  }
}


