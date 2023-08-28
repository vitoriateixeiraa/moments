import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { moment } from '../moment';

import { response } from '../response';

import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) { }

  getMoments(): Observable<response<moment[]>> {
    return this.http.get<response<moment[]>>(this.apiUrl);
  }

  getMoment(id: number): Observable<response<moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<response<moment>>(url);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeMoment(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
