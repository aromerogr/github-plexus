import { TestBed } from '@angular/core/testing';
import { CharacterService } from './character.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

fdescribe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule
      providers: [CharacterService], // Proporciona el servicio
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all characters', () => {
    const mockCharacters = {
      items: [
        {
          id: 1,
          name: 'Goku',
          image: 'https://example.com/goku.png',
          description: 'El protagonista principal de Dragon Ball.',
        },
        {
          id: 2,
          name: 'Vegeta',
          image: 'https://example.com/vegeta.png',
          description: 'El príncipe de los Saiyajin.',
        },
      ],
    };

    service.getCharacters().subscribe((response) => {
      expect(response.items.length).toBe(2);
      expect(response.items).toEqual(mockCharacters.items);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacters);
  });

  it('should fetch a character by ID', () => {
    const mockCharacterDetail = {
      id: 1,
      name: 'Goku',
      ki: '60.000.000',
      maxKi: '90 Septillion',
      race: 'Saiyan',
      gender: 'Male',
      description: 'El protagonista principal de Dragon Ball.',
      image: 'https://example.com/goku.png',
      affiliation: 'Z Fighter',
      deletedAt: null,
      originPlanet: {
        id: 3,
        name: 'Vegeta',
        isDestroyed: true,
        description: 'El planeta natal de los Saiyans.',
        image: 'https://example.com/planet-vegeta.png',
        deletedAt: null,
      },
      transformations: [
        {
          id: 1,
          name: 'Goku SSJ',
          image: 'https://example.com/goku-ssj.png',
          ki: '3 Billion',
          deletedAt: null,
        },
      ],
    };

    service.getCharacterById('1').subscribe((response) => {
      expect(response).toEqual(mockCharacterDetail);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacterDetail);
  });
});
