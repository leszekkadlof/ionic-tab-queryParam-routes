import {Component, OnInit}              from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
               selector   : 'app-tab2',
               templateUrl: 'tab2.page.html',
               styleUrls  : ['tab2.page.scss']
           })
export class Tab2Page implements OnInit {

    private query_param_results: Params;
    private param_results: Params;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        console.log('Tab2Page ngOnInit()');

        this.route.queryParams.subscribe(data => {
            console.log('Tab2Page() QUERY PARAM: ', data);
            this.query_param_results = data;
        });
        this.route.params.subscribe(data => {
            console.log('Tab2Page() PARAM: ', data);
            this.param_results = data;
        });
    }

    getQueryParam() {
        return JSON.stringify(this.query_param_results && this.query_param_results);
    }

    getParam() {
        return JSON.stringify(this.param_results && this.param_results);
    }

    getRandomNumber() {
        return Math.random();
    }

    navigateToSelf() {
        this.router.navigate([],
                             {
                                 queryParams: {random: this.getRandomNumber()},
                                 relativeTo: this.route
                             });
    }
}
