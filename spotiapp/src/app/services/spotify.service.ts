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
      'Authorization': 'Bearer BQARZPk4i-bMxioU7VumbmU9UN-HBn_nxCuViep8WcbrFyEJ80h-GjM714u6CQrOas86i1GtqnZ0XvrkhDw'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items ));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
               .pipe( map( data => data['artists'].items ));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
              //  .pipe( map( data => data['artist'].items ));
  }
}
