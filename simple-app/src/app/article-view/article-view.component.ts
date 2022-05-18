import {Component, Input, OnInit} from '@angular/core';
import { Article} from '../models/article';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  @Input()
  article : Article = {
    title: "",
    content: "",
    author: "",
    id: 0
  };

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.articleService.getArticle(id).subscribe(value => {
      this.article = value;
    });
  }

  ngOnInit(): void {
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article);
  }

}
