import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from 'src/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) {}

  gatherNotes(): Observable<Note[]>{
    return this.httpClient.get<Note[]>(`http://localhost:3000/notes`);
  }

  postNewNote(note: Note): Observable<Note>{
    return this.httpClient.post<Note>(`http://localhost:3000/notes`, note);
  }

}
