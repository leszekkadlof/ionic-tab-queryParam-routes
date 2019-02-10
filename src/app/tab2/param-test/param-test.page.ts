import { Component, OnInit }          from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';

@Component({
  selector: 'app-param-test',
  templateUrl: './param-test.page.html',
  styleUrls: ['./param-test.page.scss'],
})
export class ParamTestPage implements OnInit {
  query_param_results: Params;
  param_results: Params;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log('ParamTestPage() QUERY PARAM: ', data);
      this.query_param_results = data;
    });
    this.route.params.subscribe(data => {
      console.log('ParamTestPage() PARAM: ', data);
      this.param_results = data;
    });
  }

  getQueryParam() {
    return JSON.stringify(this.query_param_results && this.query_param_results);
  }

  getParam() {
    return JSON.stringify(this.param_results && this.param_results);
  }
}
