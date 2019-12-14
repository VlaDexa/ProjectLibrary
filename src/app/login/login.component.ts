import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const name = document.getElementById('name') as HTMLInputElement;
    // tslint:disable-next-line: only-arrow-functions
    name.addEventListener('input', function(event) {
      if (!name.validity.patternMismatch) {
        name.setCustomValidity('');
      } else {
        // tslint:disable-next-line: max-line-length
        name.setCustomValidity('Ваше имя должно начинаться с большой буквы и состоять из букв английского или русского языка и содержать в себе только буквы');
      }
    });
    const secondname = document.getElementById('secondname') as HTMLInputElement;
    // tslint:disable-next-line: only-arrow-functions
    secondname.addEventListener('input', function(event) {
      if (!secondname.validity.patternMismatch) {
        secondname.setCustomValidity('');
      } else {
        // tslint:disable-next-line: max-line-length
        secondname.setCustomValidity('Ваша фамилия должна начинаться с большой буквы и состоять из букв английского или русского языка и содержать в себе только буквы');
      }
    });
    const email = document.getElementById('email') as HTMLInputElement;
    // tslint:disable-next-line: only-arrow-functions
    email.addEventListener('input', function(event) {
      if (!email.validity.patternMismatch) {
        email.setCustomValidity('');
      } else {
        email.setCustomValidity('Вы должны закончить адрес почты написанием доменного имени. Пример:...@mail.ru');
      }
    });
    // tslint:disable-next-line: only-arrow-functions
    document.getElementById('form').onsubmit = function(evt) {
      const object = {};
      for (let i = 0; i < 4; i++) {
        object[evt.target[i].name] = evt.target[i].value;
      }
      localStorage.setItem('loginname', JSON.stringify(object));
    };
    window.onload = function() {
      if (localStorage.getItem('loginname')) {
        const object = JSON.parse(localStorage.getItem('loginname'));
        const arr = ['name', 'secondname', 'email', 'gender'];
        arr.forEach(element => {
          if (document.getElementById(element)) {
            (document.getElementById(element) as HTMLInputElement).value = object[element];
          }
        });
      }
    };
  }

}
