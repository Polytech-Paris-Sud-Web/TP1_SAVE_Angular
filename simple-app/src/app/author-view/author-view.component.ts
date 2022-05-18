import {Component, Input, OnInit} from '@angular/core';
import {AuthorService} from "../author.service";
import {Author} from "../models/Author";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.css']
})
export class AuthorViewComponent implements OnInit {


  @Input()
  author: Author= {
    name: 'Unknow author',
    biography: '',
    id: 0
  };

  constructor(private route: ActivatedRoute, private router: Router, private authorService: AuthorService) {
    const name = (this.route.snapshot.paramMap.get('name') || '');
    this.authorService.getAuthor(name).subscribe(value => {
      this.author = value[0];
    });
  }

  ngOnInit(): void {
  }

}
