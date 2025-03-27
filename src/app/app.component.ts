import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true, // Marca AppComponent como independiente
  imports: [RouterModule], // Importa RouterModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mi-aplicacion-angular';
}
