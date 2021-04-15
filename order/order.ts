export class Order{
    orderNo:number;
    orderDate:Date;
    customerName:string;
    contactNo:number; 
    city:string;
    orderStatus:string;

    constructor(orderNo:number, orderDate:Date, customerName:string, contactNo:number, city:string, orderStatus:string){
    this.orderNo=orderNo;
    this.orderDate=orderDate;
    this.customerName=customerName;
    this.contactNo=contactNo; 
    this.city=city;
    this.orderStatus=orderStatus;
    }
}


































