import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  YOTUBE_VIDEO_API = 'https://www.googleapis.com/youtube/v3/videos?part=statistics';
  API_KEY = 'AIzaSyBOlzQFDSuTmTpHlQeyzKPQaBrSyK4CFgQ';

  constructor(private http: HttpClient) { }

  getStatistics(videoID): Observable<any> {
    return this.http.get(this.YOTUBE_VIDEO_API + '&id=' + videoID + '&key=' + this.API_KEY);
  }
}
