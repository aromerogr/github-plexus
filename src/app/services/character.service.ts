import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { CharacterDetail } from '../models/character.model'; // Importa el nuevo modelo

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los personajes
  getCharacters(): Observable<{ items: Character[] }> {
    return this.http.get<{ items: Character[] }>(this.apiUrl);
  }

  // Método para obtener un personaje por ID
  getCharacterById(id: string): Observable<CharacterDetail> {
    return this.http.get<CharacterDetail>(`${this.apiUrl}/${id}`);
  }
}
