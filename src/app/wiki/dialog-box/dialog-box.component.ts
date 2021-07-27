import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleType } from 'src/app/shared/enum.model';
import { Wiki } from 'src/app/shared/wiki/wiki.model';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
 
  action:string;
  local_data:any;

  articleType = ArticleType; 
  keys: any[];
  
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
     
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Wiki) {
    
    this.local_data = {...data};
    this.action = this.local_data.action;

    this.keys = Object.keys(this.articleType).filter(x => !isNaN(Number(x)) && Number(x) !== 0).map(Number);
  }
  ngOnInit() {
  }
  
  doAction(){
    this.dialogRef.close({event : this.action, data: this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
 
}
