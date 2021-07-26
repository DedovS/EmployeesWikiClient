export class PageParam {
    pageNumber: number;
    pageSize: number;
    orderColumn: string;
    orderDirection: string;
    search: string;

    constructor() {
        this.pageNumber = 1;
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
        this.date = new Date();
        this.articleType = 0;
    }
}