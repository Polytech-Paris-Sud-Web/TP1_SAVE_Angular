import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Article} from './models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //
  // public getArticles() : Article[] {
  //   return [{
  //     title: 'My First Article',
  //     content: 'Hello World',
  //     author: 'Orangefire'
  //   }, {
  //     title: 'Angular component',
  //     content: 'Angular component looks awesome!',
  //     author: 'Orangefire'
  //   }, {
  //     title: 'Angular service',
  //     content: 'I read something about angular service, i will try it soon',
  //     author: 'Orangefire'
  //   }];
  // }
  constructor(private http : HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public deleteArticle(article: Article) {
    return this.http.delete(`http://localhost:3000/articles/${article.id}`).subscribe(value => {
    });
  }

  public createArticle(newArticle: { title: string; content: string; author: string; }) {
    console.log("add articles")
    return this.http.post("http://localhost:3000/articles", newArticle).subscribe(value => {
      console.log(value);
    });
  }

  public getArticle(id: number): Observable<Article> {
      return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
    }

  public search(mot : string): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/articles?q=${mot}`);
  }

}
