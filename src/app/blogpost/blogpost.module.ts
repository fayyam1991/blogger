import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { BlogpostCategoriesComponent } from './blogpost-categories/blogpost-categories.component';

@NgModule({
  declarations: [BlogpostFeaturedComponent, BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, BlogpostCategoriesComponent],
  exports:[
    BlogpostFeaturedComponent
  ],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ]
})
export class BlogpostModule { }
