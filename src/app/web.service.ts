import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL: String;

  constructor(private http: HttpClient) {
     this.ROOT_URL = 'http://localhost:3000';
    }

    getTypes() {
      return this.http.get('http://localhost:3000/getTypes');
    }

    getWordsByType(wordType: String) {
      return this.http.get('http://localhost:3000/getWordsByType/' + wordType);
    }

    getSentences() {
      return this.http.get('http://localhost:3000/getSentences');
    }

    addSentence(payload: Object){
      return this.http.post('http://localhost:3000/addSentence', payload);
    }
}
