// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TabA } from './models/tab-a.model'; // Assicurati che il percorso sia corretto
import { TabB } from './models/tab-b.model'; // Assicurati che il percorso sia corretto

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl: string = 'http://localhost:5046/api/';

  constructor(private http: HttpClient) {}

  getTabAData(): Observable<TabA[]> {
    return this.http.get<TabA[]>(`${this.baseUrl}taba`);
  }

  // src/app/data.service.ts
  getTabBData(): Observable<TabB[]> {
  return this.http.get<TabB[]>(`${this.baseUrl}tabb`);
}

}
