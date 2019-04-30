import http from "k6/http";
import { Counter } from "k6/metrics";

import convertBaseCharacters from "../generation/convert.js";

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let requests = new Counter('requests');

export default function() {

  for (let i = 0; i < 1e7; i++) {  
    let target = Math.random() * 1e7;
    let symbol = convertBaseCharacters(target, alphabet, 5);
    http.get(`http://localhost:3003/stocks/${symbol}`, {tags: {name: 'StockSymbolURL'}});
    requests.add(1);
  }

};