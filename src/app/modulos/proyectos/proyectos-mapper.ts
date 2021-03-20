export interface ResponseProyectos {
    code?:            number;
    status?:          string;
    copyright?:       string;
    attributionText?: string;
    attributionHTML?: string;
    etag?:            string;
    data?:            Data;
}

export interface Data {
    offset?:  number;
    limit?:   number;
    total?:   number;
    count?:   number;
    results?: Proyecto[];
}

export interface Proyecto {
    id?:          number;
    title?:       string;
    description?: null | string;
    resourceURI?: string;
    urls?:        URL[];
    startYear?:   number;
    endYear?:     number;
    rating?:      string;
    type?:        string;
    modified?:    string;
    thumbnail?:   Thumbnail;
    creators?:    Creators;
    characters?:  Characters;
    stories?:     Stories;
    comics?:      Characters;
    events?:      Characters;
    next?:        Next | null;
    previous?:    Next | null;
}

export interface Characters {
    available?:     number;
    collectionURI?: string;
    items?:         Next[];
    returned?:      number;
}

export interface Next {
    resourceURI?: string;
    name?:        string;
}

export interface Creators {
    available?:     number;
    collectionURI?: string;
    items?:         CreatorsItem[];
    returned?:      number;
}

export interface CreatorsItem {
    resourceURI?: string;
    name?:        string;
    role?:        string;
}

export interface Stories {
    available?:     number;
    collectionURI?: string;
    items?:         StoriesItem[];
    returned?:      number;
}

export interface StoriesItem {
    resourceURI?: string;
    name?:        string;
    type?:        Type;
}

export enum Type {
    Cover = "cover",
    Empty = "",
    InteriorStory = "interiorStory",
}

export interface Thumbnail {
    path?:      string;
    extension?: string;
}

export interface URL {
    type?: string;
    url?:  string;
}

