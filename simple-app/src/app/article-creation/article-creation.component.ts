import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService} from "../article.service";


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  }

  createArticle() {
    const { title, content, author } = this.articleForm.value;
    const newArticle = {
      title,
      content,
      author
    }
    console.log(newArticle);
    this.articleService.createArticle(newArticle);
    this.articleForm.reset();
  }

  ngOnInit(): void {
  }

}
