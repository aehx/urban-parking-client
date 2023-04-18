export interface GeoData {
  attribution: string;
  features: {
    geometry: geometry;
    properties: properties;
    type: string;
  }[];
  licence: string;
  limit: number;
  query: string;
  type: string;
  version: string;
}

interface geometry {
  coordinates: number[];
  type: string;
}

interface properties {
  city: string;
  citycode: string;
  context: string;
  id: string;
  importance: number;
  label: string;
  municipality?: string;
  name: string;
  population?: number;
  postcode: string;
  score: number;
  street?: string;
  type: string;
  x: number;
  y: number;
}

export interface searchedPlaceData {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
