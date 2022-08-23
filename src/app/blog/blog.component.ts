import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs:Array<any>

  constructor(data: BlogDataService ) { 
    data.getBlogs().subscribe((blogs:any) => {
      this.blogs = blogs.items.map(blog => blog.field)
      console.log(blogs)
    })
  }

  ngOnInit(): void {
  }

}
