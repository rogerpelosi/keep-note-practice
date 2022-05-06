import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from 'src/note';
import { TokenauthService } from './tokenauth.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private httpClient: HttpClient,
    private tokenauth: TokenauthService){}

  gatherNotes(): Observable<Note[]>{
    return this.httpClient.get<Note[]>(`http://localhost:3000/api/v1/notes`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenauth.getToken()}`)
    });
  }

  postNewNote(note: Note): Observable<Note>{
    console.log(note);
    return this.httpClient.post<Note>(`http://localhost:3000/api/v1/notes`, note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenauth.getToken()}`)
    });
  }

}
