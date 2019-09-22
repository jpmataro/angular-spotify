import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Service ok');
  }

  getQuery ( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDdaGKb4LhinEGWoZFFbg_8NhTm00MCItJKP2TRIqzncjiKrK2eAcdLIzoQFtmYJgh52N-85A2qEvz2gRPETOy2rS7S__DybNlswgYE-aXsP4SMhL1YV503Fq0eV6YV_zz_vYCqSKUj'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items ));
  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
               .pipe( map( data => data['artists'].items ));
  }
}
