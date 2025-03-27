import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Asegúrate de que HttpClientModule esté aquí
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent {
  characters: any[] = [];

  constructor(private characterService: CharacterService) {}
  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data) => {
      console.log(data); // Verifica la estructura de los datos aquí
      this.characters = data.items;
    });
  }
}
