import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  cat: any;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getRandomCat().subscribe(data => {
      this.cat = data;
    });
  }
  
}
