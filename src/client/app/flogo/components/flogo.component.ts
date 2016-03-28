import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {FlogoNavbarComponent} from './navbar.component';
import {FlogoFlowsComponet} from '../../flogo.flows/components/flows.component';
import {FlogoCanvasComponent} from '../../flogo.flows.detail/components/canvas.component';
import {FlogoTaskComponent} from "../../flogo.task/components/task.component";
import {PostService} from '../../../common/services/post.service';

@Component({
  selector: 'flogo-app',
  moduleId: module.id,
  templateUrl: 'flogo.tpl.html',
  directives: [ROUTER_DIRECTIVES, FlogoNavbarComponent],
  providers: [PostService]
})

@RouteConfig([
  {
    path: '/', name: "FlogoHome", component:FlogoFlowsComponet
  },
  {
    path: '/flows', name: "FlogoFlows", component:FlogoFlowsComponet, useAsDefault: true
  },
  {
    path:'/flows/:id/...', name:"FlogoFlowDetail", component: FlogoCanvasComponent
  },
  {
    path:'/task', name: 'FlogoTask', component: FlogoTaskComponent
  }
])

export class FlogoAppComponent{

}