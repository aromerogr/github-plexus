export interface Character {
  id: number; // Cambiado de string a number
  name: string;
  image: string;
  description?: string; // Opcional si no siempre está presente
}

export interface OriginPlanet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: string | null;
}

export interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt: string | null;
}
export interface CharacterDetail {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
  originPlanet: OriginPlanet;
  transformations: Transformation[];
}
