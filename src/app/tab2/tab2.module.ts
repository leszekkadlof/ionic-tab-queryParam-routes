import {IonicModule}   from '@ionic/angular';
import {RouterModule}  from '@angular/router';
import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {Tab2Page}      from './tab2.page';
import {ParamTestPage} from './param-test/param-test.page';

@NgModule({
              imports     : [
                  IonicModule,
                  CommonModule,
                  FormsModule,
                  RouterModule.forChild([
                                            {path: '', component: Tab2Page},
                                            {path: 'new', component: ParamTestPage},
                                            {path: 'new/:id', component: ParamTestPage},
                                        ])
              ],
              declarations: [Tab2Page, ParamTestPage]
          })
export class Tab2PageModule {}
