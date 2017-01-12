import { Component, EventEmitter, Output } from '@angular/core';
import { FlogoModal } from '../../../common/services/modal.service';
import { IFlogoApplicationModel } from '../../../common/application.model';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { RESTAPIApplicationsService } from '../../../common/services/restapi/applications-api.service';


@Component({
    selector: 'flogo-apps-list',
    moduleId: module.id,
    templateUrl: 'app.list.tpl.html',
    styleUrls: ['app.list.css']
})
export class FlogoAppListComponent {
    @Output() onSelectedApp:EventEmitter<IFlogoApplicationModel> = new EventEmitter<IFlogoApplicationModel>();
    @Output() onAddedApp:EventEmitter<IFlogoApplicationModel> = new EventEmitter<IFlogoApplicationModel>();
    @Output() onDeletedApp:EventEmitter<IFlogoApplicationModel> = new EventEmitter<IFlogoApplicationModel>();

    public applications: Array<IFlogoApplicationModel> = [];
    selectedApp:IFlogoApplicationModel;
    overApp:IFlogoApplicationModel;

    constructor(public flogoModal: FlogoModal,
                public translate: TranslateService,
                private apiApplications: RESTAPIApplicationsService) {
        this.apiApplications.getAllApps()
            .then((applications:Array<IFlogoApplicationModel>)=> {
                this.applications = applications;
            })
    }

    onSelectApp(app:IFlogoApplicationModel) {
        this.selectedApp = app;
        this.onSelectedApp.emit(app);
    }

    confirmDelete(app:IFlogoApplicationModel) {
        this.flogoModal.confirmDelete('Are you sure you want to delete ' + app.name +  ' application?').then((res) => {
            if (res) {
                this._delete(app);
            } else {
            }
        });
    }

    onAdd(event) {
        this.apiApplications.createNewApp()
            .then((application:IFlogoApplicationModel)=> {
                this.onAddedApp.emit(application);
                this.onSelectApp(application);
            });
    }


    private _delete(application:IFlogoApplicationModel) {
        this.apiApplications.deleteApp(application.id)
            .then(()=> {
                this.onDeletedApp.emit(application);
                this.selectedApp = null;
                this.overApp = null;
                //this._router.navigate([ 'FlogoHomeComponent', {id: application.id} ]);
            });
    }

    onMouseOver(app: IFlogoApplicationModel) {
        this.overApp = app;
    }

    onMouseOut() {
        this.overApp = null;
    }

}
