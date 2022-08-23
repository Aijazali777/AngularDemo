import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  guid:string = ""
  url:string =  `https://api.aglty.io/${this.guid}/fetch/en-us/list/myblog`
  apikey:string = ""

  constructor(private http: HttpClient) { }

  getBlogs()
  {
    return this.http.get(this.url, {
      headers: {
        accept: "application/json",
        APIKey: this.apikey
      }
    })
  }
}
