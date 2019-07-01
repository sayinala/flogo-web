import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { DiagramModule } from '@flogo-web/lib-client/diagram';
import { SharedModule as FlogoSharedModule } from '@flogo-web/lib-client/common';
import { LogsModule as FlogoLogsModule } from '@flogo-web/lib-client/logs';
import { HeaderModule as FlogoDesignerHeader } from '@flogo-web/lib-client/designer-header';

import { MonacoEditorModule } from './shared/monaco-editor';
import { FormBuilderModule as FlogoCommonFormBuilderModule } from './shared/dynamic-form';
import { FlogoRunFlowComponent } from './run-flow/run-flow.component';

import { CoreModule as FlowCoreModule } from './core';

import { TriggersModule as FlogoFlowTriggersModule } from './triggers';
import { TaskMapperModule as FlogoTaskMapperModule } from './task-configurator';
import { BranchMapperModule } from './branch-configurator';
import { ParamsSchemaModule } from './params-schema';

import { FlowRoutingModule } from './flow-routing.module';
import { FlowComponent } from './flow.component';
import { FlowDataResolver } from './flow-data.resolver';
import { featureReducer } from './core/state';

import { FlogoFlowDiagramComponent } from './flow-diagram/flow-diagram.component';
import { FlowTabsComponent } from './flow-tabs/flow-tabs.component';
import { SaveEffects, TriggerMappingsEffects } from './core/effects';

import { DebugPanelModule } from './debug-panel';
import { TaskAddModule } from './task-add';
import { DefineParamsModule } from '@flogo-web/lib-client/define-params';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    StoreModule.forFeature('flow', featureReducer),
    EffectsModule.forFeature([SaveEffects, TriggerMappingsEffects]),
    FlogoSharedModule,
    FlogoLogsModule,
    DiagramModule,
    MonacoEditorModule.forRoot(),

    FlowCoreModule,
    ParamsSchemaModule,
    FlogoTaskMapperModule,
    FlogoCommonFormBuilderModule,
    FlogoFlowTriggersModule,
    FlowRoutingModule,
    TaskAddModule,
    DebugPanelModule,
    BranchMapperModule,
    FlogoDesignerHeader,
    DefineParamsModule,
  ],
  declarations: [
    FlogoRunFlowComponent,
    FlowComponent,
    FlogoFlowDiagramComponent,
    FlowTabsComponent,
  ],
  providers: [FlowDataResolver],
  bootstrap: [FlowComponent],
})
export class FlowModule {}
