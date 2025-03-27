import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { CharacterDetail } from '../../models/character.model'; // Importa el modelo correcto

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: CharacterDetail | undefined; // Usa el modelo correcto

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getCharacterById(id).subscribe({
        next: (character) => {
          this.character = character; // Asigna el personaje recuperado
        },
        error: (err) => {
          console.error('Error al recuperar el personaje:', err);
        },
      });
    }
  }
}
