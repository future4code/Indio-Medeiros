import { LOCATION, NACIONALITY } from "./enums";

//1a.
export interface User {
  name: string;
  balance: number;
}

//3b.
export interface UserNacionatily {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}
