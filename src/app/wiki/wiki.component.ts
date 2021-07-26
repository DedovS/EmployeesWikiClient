import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, PageEvent } from '@angular/material';
import { WikiPageParam } from '../shared/pageParam.model';
import { Wiki, WikiPagination } from '../shared/wiki/wiki.model';
import { WikiService } from '../shared/wiki/wikis.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {


  wikiList: Wiki[] = [];
  displayedColumns: string[] = ['title', 'description', 'articleType', 'date'];
   
  pageEvent: PageEvent;
  pageIndex: number;
  pageSize: number;
  length: number;
  pageParams : WikiPageParam =  new WikiPageParam();

  constructor(public service: WikiService) {
  }
   
  ngOnInit() {
    this.getWikis(new WikiPageParam());
  }

  getList(event) { 

    console.log(event);
     if(event.pageIndex || event.pageSize){

       this.pageParams.pageNumber = event.pageIndex;
       this.pageParams.pageSize = event.pageSize;
     }

     if(event.direction || event.active){
      this.pageParams.orderColumn = event.active;
      this.pageParams.orderDirection = event.direction;
     }

    this.getWikis(this.pageParams);
  }
  getWikis(pageParams : WikiPageParam){

    this.service.getList(pageParams)
      .subscribe((res: WikiPagination) => {
        this.wikiList = res.list;
        this.length = res.totalCount; 
      });
  }

}
