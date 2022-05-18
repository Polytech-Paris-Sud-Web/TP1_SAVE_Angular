import { Component, OnInit } from '@angular/core';

import {ArticleService} from '../article.service';
import {Observable} from "rxjs";
import { Article} from '../models/article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles!: Article[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe((value => {
      this.articles = value;
    }));
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article);
    this.articleService.getArticles().subscribe((value => {
      this.articles = value;
    }));
  }

  searchArticles(event : Event) {
    const mot = (<HTMLInputElement>event.target).value;
    this.articleService.search(mot).subscribe((value => {
      this.articles = value;
    }));
  }


}
