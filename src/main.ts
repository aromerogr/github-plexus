import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CharacterListComponent } from './app/components/character-list/character-list.component';
import { CharacterDetailComponent } from './app/components/character-detail/character-detail.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Proporciona HttpClient aquí
    provideRouter([
      { path: '', component: CharacterListComponent }, // Ruta predeterminada
      { path: 'character/:id', component: CharacterDetailComponent },
    ]),
  ],
}).catch((err) => console.error(err));
