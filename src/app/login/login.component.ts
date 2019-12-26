import { Component, OnInit, NgZone } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  genders = ['Мужской',
    'Женский'];
  registered: number;
  model = new Hero(18, '', this.genders[0], '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  constructor(private zone: NgZone) {

  }
  reloadPage() {
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }
  ngOnInit() {
    window.onload = function() {
      if (localStorage.getItem('loginname')) {
        this.registered = 0;
        console.log(this.registered);
        const object = JSON.parse(localStorage.getItem('loginname'));
        const arr = ['name', 'secondname', 'email', 'gender'];
        arr.forEach(element => {
          if (document.getElementById(element)) {
            (document.getElementById(element) as HTMLInputElement).value = object[element];
          }
        });
      } else {
        this.registered = 1;
        console.log(this.registered);
      }
    };
    document.getElementById('formaker').onsubmit = function(evt) {
      const object = {};
      for (let i = 0; i < 4; i++) {
        object[evt.target[i].name] = evt.target[i].value;
        console.log(i);
      }
      localStorage.setItem('loginname', JSON.stringify(object));
    };
  }
}

