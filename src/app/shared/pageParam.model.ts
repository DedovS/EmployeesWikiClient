import { ArticleType } from "./enum.model";

export class PageParam {
    pageNumber: number;
    pageSize: number;
    orderColumn: string;
    orderDirection: string;
    search: string;

    constructor() {
        this.pageNumber = 0;
        this.pageSize = 10;
        this.orderColumn = "id";
        this.orderDirection = "asc";
        this.search = "";
    }
}
export class WikiPageParam extends PageParam{
    date: Date; 
    articleType : ArticleType;
   
    constructor(){
        super()
        this.date = null;
        this.articleType = 0;
    }
}