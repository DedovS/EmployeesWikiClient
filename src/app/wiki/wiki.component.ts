import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable, PageEvent } from '@angular/material';
import { ArticleType } from '../shared/enum.model';
import { WikiPageParam } from '../shared/pageParam.model';
import { Wiki, WikiPagination } from '../shared/wiki/wiki.model';
import { WikiService } from '../shared/wiki/wikis.service';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  articleType = ArticleType; 
  keys: any[];

  wikiList: Wiki[] = [];
  displayedColumns: string[] = ['title', 'description', 'articleType', 'date', 'actions'];

  pageEvent: PageEvent;
  pageIndex: number;
  pageSize: number;
  length: number;
  pageParams: WikiPageParam = new WikiPageParam();


  constructor(public service: WikiService,
    public dialog: MatDialog) {
    this.keys = Object.keys(this.articleType).filter(x => !isNaN(Number(x))).map(Number);
  }

  ngOnInit() {
    this.getWikis(new WikiPageParam());
  }
  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '700px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  
  addRowData(wiki: Wiki){     
    this.service.create(wiki).subscribe(res => {
      this.getList(null);
    });
  }

  updateRowData(wiki: Wiki){
    this.service.update(wiki).subscribe(res => {
      this.getList(null);
    });
  }
  deleteRowData(wiki: Wiki){
    this.service.delete(wiki.id).subscribe(res => {
      this.getList(null);
    });
  }

  changed(text: string) {
    this.pageParams.search = text;
    this.getList(null);
  }
  
  articleChanged(articleType: ArticleType) {
   
    this.pageParams.articleType = articleType;
    this.getList(null);
  }

  getList(event) {

    if (event) {
      if (event.pageIndex || event.pageSize) {

        this.pageParams.pageNumber = event.pageIndex;
        this.pageParams.pageSize = event.pageSize;
      }

      if (event.direction || event.active) {
        this.pageParams.orderColumn = event.active;
        this.pageParams.orderDirection = event.direction;
      }
    }
    this.getWikis(this.pageParams);
  }
  getWikis(pageParams: WikiPageParam) {

    this.service.getList(pageParams)
      .subscribe((res: WikiPagination) => {
        this.wikiList = res.list;
        this.length = res.totalCount;
      });
  }

}
