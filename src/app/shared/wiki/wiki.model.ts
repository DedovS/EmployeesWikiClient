export class Wiki {
    id: number;
    title: string;
    description: string;
    date: Date; 
    articleType: ArticleType
  
    constructor() {
      this.id = 0;
      this.title = "";
      this.description = "";
      this.date = new Date();
      this.articleType = 0;
    } 
  }