import { Component, OnInit, DoCheck } from '@angular/core';
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
  async loginmenu() {
    document.getElementById('loginmenu').classList.toggle('unshown');
  }
  Exit() {
    localStorage.removeItem('loginname');
    document.getElementById('registered').classList.toggle('unshown');
  }
  closing() {
    if (!document.getElementById('loginmenu').classList.contains('unshown')) {
      document.getElementById('loginmenu').classList.toggle('unshown');
    }
    if (!document.getElementById('myList').classList.contains('unshown')) {
      document.getElementById('myList').classList.toggle('unshown');
    }
  }
  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      // tslint:disable-next-line: only-arrow-functions
      $('#myInput').on('keyup', function() {
        const value = $('#myInput').val().toLowerCase();
        if (value !== '') {
          $('#myList div').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
          });
        } else {
          $('#myList div').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > 1);
          });
        }
      }
      );
    });
  }
  async ngDoCheck() {
    if (!document.getElementById('unregistered').classList.contains('unshown')) {
      document.getElementById('unregistered').classList.toggle('unshown');
    }
    if (localStorage.getItem('loginname')) {
      const object = JSON.parse(localStorage.getItem('loginname'));
      const name = 'name';
      const gender = 'gender';
      const namer = object[name];
      const genderr = object[gender];
      if (genderr === 'Женский') {
        if (document.getElementById('loginwomanreg').classList.contains('unshown')) {
          document.getElementById('loginwomanreg').classList.toggle('unshown');

        }
      } else {
        if (document.getElementById('loginmanreg').classList.contains('unshown')) {
          document.getElementById('loginmanreg').classList.toggle('unshown');
        }
      }

      console.log(namer);

    } else {
      const registered = 0;
      document.getElementById('unregistered').classList.toggle('unshown');
    }
    if (localStorage.getItem('loginname')) {
      if ($('#login')) {
        if (document.getElementById('registered').classList.contains('unshown')) {
          document.getElementById('registered').classList.toggle('unshown');
        }
        const object = JSON.parse(localStorage.getItem('loginname'));
        const name = 'name';
        const namer = object[name];
        $('#logined').html(namer);
      }
    }
  }
}
