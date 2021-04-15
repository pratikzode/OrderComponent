import { Component } from "@angular/core";
import { Order } from "./order";

@Component({
    selector:'order-comp',
    templateUrl:'./order.component.html',
    styleUrls:['./order.component.css']
})
export class OrderComponent{
    status:boolean=true;

    arr:Order[]=[
        new Order(101, new Date("2020-11-28"), "Narendra Modi", 8722554532, "Ahmedabad", "Processed"),
        new Order(102, new Date("2020-05-10"), "Kevin Pietersen", 9822543780, "Patna", "Pending"),
        new Order(103, new Date("2020-09-09"), "Chunky Pandey", 7083521254, "Surat", "Pending"),
        new Order(104, new Date("2021-01-12"), "Taarak Mehta", 9823599259, "Mumbai", "Processed"),
        new Order(105, new Date("2020-07-23"), "Virender Sehwag", 9945784919, "Rohtak", "Cancelled"),
        new Order(106, new Date("2021-01-09"), "Jofra Archer", 8275981320, "Chennai", "Pending"),
        new Order(107, new Date("2020-10-03"), "Popatlal", 7083514463, "Kolhapur", "Processed"),
        new Order(108, new Date("2021-02-17"), "Vladimir Putin", 8775980661, "Lucknow", "Processed"),
        new Order(109, new Date("2021-02-14"), "John Cena", 9954581342, "Hyderabad", "Cancelled"),
        new Order(110, new Date("2020-04-13"), "Jhulan Goswami", 7729581350, "Raurkela", "Pending")
    ]
}





































