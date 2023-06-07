import { Component } from '@angular/core';
import {BehaviorSubject, interval, Observable, ReplaySubject, Subject} from 'rxjs'
import {filter, map, debounceTime, tap, take} from 'rxjs/operators';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public formGroup: FormGroup;
  public results: Array<string> = [];
  public $results?: Observable<Array<string>>;

  constructor(private httpClient: HttpClient){

    //this.rxjs_demo();
        
    this.formGroup = new FormGroup({
      search: new FormControl("", [], [])
    });

    const searchCtrl = this.formGroup.get("search");
    searchCtrl?.valueChanges
                  .pipe(
                    debounceTime(1000)
                  )
                  .subscribe((input) => {
                    console.log(input);
                    //api call

                    const url = "https://en.wikipedia.org/w/api.php";
                    const queryParameters = new HttpParams()
                                                  .set("action", "opensearch")
                                                  .set("origin", "*")
                                                  .set("limit", 20)
                                                  .set("search", input)
                    // this.httpClient
                    //         .get(url, {params: queryParameters})
                    //         .subscribe((data) => {
                    //             console.log(data);
                    //         });

                    //observe: 'response' / 'body'(default)
                    // this.httpClient
                    //         .get(url, {params: queryParameters, observe: 'response'})
                    //         .subscribe((response) => {
                    //             console.log(response);
                    //         });

                    // this.httpClient
                    //         .get<any>(url, {params: queryParameters, observe: 'body'})
                    //         .pipe(
                    //           map(data => data[1])
                    //         )
                    //         .subscribe((data) => {
                    //             console.log(data);
                    //             this.results = data;
                    //         });


                    this.$results =  this.httpClient.get<any>(url, {params: queryParameters, observe: 'body'})
                            .pipe(
                              map(data => data[1])
                            );


                        
                  })
  }

  rxjs_demo(){
    //create an observable stream
    //subscribe is to get the result
    //pipe is to plugin the operators(n)
    // interval(1000)
    //   .pipe(
    //     take(10),
    //     filter(item => item % 2 === 0),
    //     map(item => item * item)
    //   )
    //   .subscribe((data) => {
      
    //     console.log("subscribe: ", data);

    //   });


    //const subject = new Subject();
    //const subject = new ReplaySubject();
    const subject = new BehaviorSubject(0);

    subject.subscribe((data) => {
      console.log("in sub#1", data);
    })

    subject.subscribe((data) => {
      console.log("in sub#2", data);
    })
    //publishing
    subject.next(10);
    subject.next(20);
    subject.next(30);

    subject.subscribe((data) => {
      console.log("in sub#3", data);
    })

    subject.next(40);
    subject.next(50);

  }

}
