import { RedditService } from '../reddit.service';
import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../post';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css']
})
export class RedditFeedComponent implements OnInit {


  redditPosts: IPost[];

  constructor(
    private redditService: RedditService,
  ) { }

  ngOnInit() {
  }

  // calls the Aww subreddit API from the redditService
  callReddit() {
    this.redditService.fetchAwwSubreddit().subscribe(
      (data : any) => {
        this.redditPosts = data.data.children;
        console.log(data.data.children);
      }
      );;
  }

}
