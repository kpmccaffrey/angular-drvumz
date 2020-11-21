import { Component } from "@angular/core";

import { products } from "../products";
import { HttpClient, HttpHeaders } from "@angular/common/http";

class SearchItem {
  constructor(
    public track: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string
  ) {}
}

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }
  results: SearchItem[];
  products = products;

  loading: boolean;

  public theObject2: any = this.http
    .get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=BA&apikey=ZXUP36HNYFMNVY1N"
    )
    .toPromise();

  public theObject: any = {
    simpleProp: 1,
    complexProp: {
      InnerProp1: "test1",
      InnerProp2: "test2"
    },
    arrayProp: [1, 2, 3, 4]

    //share() {
    // window.alert('The product has been shared!');
  };

  public getPosts() {
    return this.http
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=BA&apikey=ZXUP36HNYFMNVY1N"
      )
      .toPromise();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
