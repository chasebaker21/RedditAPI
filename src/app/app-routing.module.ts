import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditFeedComponent } from './reddit-feed/reddit-feed.component';


const routes: Routes = [
  {
    path: '',
    component: RedditFeedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
