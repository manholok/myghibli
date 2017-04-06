import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import { AppModule } from './app';

if (environment.production) {
    console.log('production');
    enableProdMode();
} else {
    console.log('DEV');
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(function(){})
    .catch(err => console.error(err));

console.log('WELL HELLO');