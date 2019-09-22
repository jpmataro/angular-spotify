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

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAXF9bra4rAkpchwxaMYW6Xpp-gOrEkgeMQp8tcby_-rTF4XkqK2kfvZhZsbl-Hmn2CyIUdm-zfM1_PjhI'
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
