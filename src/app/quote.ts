export class Quote {
    numberOfUpvote: number;
    numberOfDownvote: number;
    createdDate: Date;
    showDetails: boolean;

    constructor(public id:number, public fullname:string, public quoteTitle:string, public author:string){
        this.numberOfUpvote = 0;
        this.numberOfDownvote = 0;
        this.createdDate = new Date();
        this.showDetails = false;
    }
}
