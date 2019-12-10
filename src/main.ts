import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare var $: any;
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// tslint:disable-next-line: only-arrow-functions
window.addEventListener('load', function() {
    if (localStorage.getItem('loginname')) {
      if ($('#login')) {
        document.getElementById('registered').classList.toggle('unshown');
        $('#login').html(localStorage.getItem('loginname'));
      }
    } else {
      document.getElementById('unregistered').classList.toggle('unshown');
    }
  });
