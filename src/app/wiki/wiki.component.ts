import { Component, OnInit } from '@angular/core';
import { WikiPageParam } from '../shared/pageParam.model';
import { Wiki } from '../shared/wiki/wiki.model';
import { WikiService } from '../shared/wiki/wikis.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  wikiList : Wiki[] = [];
  displayedColumns: string[] = ['title', 'description', 'articleType', 'date'];

  constructor(public service: WikiService) {
this.getList();
   }

   pageParams : WikiPageParam = new WikiPageParam();
  
   ngOnInit() {
   
  }
  getList(){
    this.service.getList(this.pageParams).subscribe((res: Wiki[])=> {
      this.wikiList = res;
  });
  }

}
