import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Service ok');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCsc3ERfZXOlOH_UmHYj1-T4stMWujFzMVILmHS-4s9OCmIv2V4OqmIvIFl-9RQDSIRNQ6snB-SJ8OxJvOKJ0wmn287nWi5SAzMwWCE940CWBnC7chCV6j8NHUfE0LMouGi670-X5vh'
    })
    
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
        .subscribe( data => {
          console.log(data);
        })
  }
}
