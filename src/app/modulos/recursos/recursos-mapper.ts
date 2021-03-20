export interface Response {
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
    results?: Recursos[];
}

export interface Recursos {
    id?:          number;
    name?:        string;
    description?: string;
    modified?:    string;
    thumbnail?:   Thumbnail;
    resourceURI?: string;
    comics?:      Comics;
    series?:      Series;
     stories?:     Stories;
    events?:      Comics; 
    urls?:        URL[];
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
    type?:        ItemType;
}

export enum ItemType {
    Cover = "cover",
    Empty = "",
    InteriorStory = "interiorStory",
}

export interface Comics {
    available?:     number;
    collectionURI?: string;
    items?:         ComicsItem[];
    returned?:      number;
}

export interface ComicsItem {
    resourceURI?: string;
    name?:        string;
}

export interface Thumbnail {
    path?:      string;
    extension?: Extension;
}

export enum Extension {
    GIF = "gif",
    Jpg = "jpg",
}

export interface Series {
    available?:     number;
    collectionURI?: string;
    items?:         Item[];
    returned?:      number;
}

export interface Item {
    resourceURI?: string;
    name?:        string;
}