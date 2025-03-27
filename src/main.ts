import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CharacterListComponent } from './app/components/character-list/character-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Proporciona HttpClient aquí
    provideRouter([
      { path: '', component: CharacterListComponent }, // Ruta predeterminada
    ]),
  ],
}).catch((err) => console.error(err));
