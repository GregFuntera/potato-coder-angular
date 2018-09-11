import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../services/blog/blog.service';
import { YoutubeApiService } from './../../services/youtube-api/youtube-api.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: any[] = [];

  constructor(private blogSvc: BlogService, private youtubeAPISvc: YoutubeApiService) { }

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.blogSvc.getBlogs().subscribe(
      data => {
        this.getBlogs(data).then(blogs => this.blogs = blogs);
    });
  }

  async getBlogs(data) {
    const blogs = await this.getYoutubeStats(data);
    return blogs;
  }

  getYoutubeStats(blogs): Promise<any> {
    return new Promise(resolve => {
      blogs.map(blog => {
      const youtubeID = blog.youtube_stats.youtube_id;
      // Finding Youtube Stats
      if (youtubeID) {
        this.youtubeAPISvc.getStatistics(youtubeID).subscribe(
          data => {
            let youtube_stats = data.items[0].statistics;
            blog.youtube_id = youtubeID;
            blog.youtube_stats = youtube_stats;
          });
        }
        resolve(blogs);
      });
    });
  }
}
