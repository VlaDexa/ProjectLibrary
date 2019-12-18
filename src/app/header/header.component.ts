import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
declare var $: any;
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// tslint:disable-next-line:max-line-length
export class HeaderComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck {
  constructor() {

  }
  registered: 0;
  namer: 'kek';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges1');
  }
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
  }
  ngAfterContentInit() {
    console.log('AfterContentInit1');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked1');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit1');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked1');
    if (localStorage.getItem('loginname')) {
      console.log('Есть ЛокалСторадж');
      const object = JSON.parse(localStorage.getItem('loginname'));
      const elem = 'name';
      const gender = 'gender';
      const namer = object[elem];
      const genderr = object[gender];
      if (genderr === 'Женский') {
        console.log('Дивка');
        document.getElementById('loginwomanreg').classList.toggle('unshown');
      } else {
        console.log('Поцан');
        document.getElementById('loginmanreg').classList.toggle('unshown');
      }
      document.getElementById('logined').innerHTML = namer;
      console.log('Имя: ' + namer);
    }
    let registered = 0;
    if (localStorage.getItem('loginname')) {
      if (registered === 1) {
        document.getElementById('loginmanreg').classList.toggle('unshown');
        document.getElementById('unregistered').classList.toggle('unshown');
        registered++;
        console.log(registered);
      }
      if ($('#login')) {
        document.getElementById('registered').classList.toggle('unshown');
        $('#login').html(localStorage.getItem('loginname'));
      } else {
        document.getElementById('unregistered').classList.toggle('unshown');
        console.log(registered);
      }
      registered++;
    }
  }
  ngOnDestroy() {
    console.log('OnDestroy1');
  }

}


