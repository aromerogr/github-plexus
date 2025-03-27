import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent, // Declara el componente aquí
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [], // Agrega esta línea
})
export class AppModule {}
