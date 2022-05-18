import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Article} from './models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

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

  public lastTenArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/articles?_sort=id&_order=desc&_limit=10`);
  }

}
