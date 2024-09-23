import { Info } from "./api.models";

export interface CharacterInfo{
    info: Info;
    results: Character[]
}

export interface Character{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: Gender;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date
}

enum Gender{
    "MALE" = "Male",
    "FEMALE" = "Female",
    "GENDERLESS" = "Genderless",
    "UNKWONW" = "unknown",
}

export interface LinkedElement {
    name: string;
    url: string;
}

export interface Origin extends LinkedElement{}
export interface Location extends LinkedElement{}