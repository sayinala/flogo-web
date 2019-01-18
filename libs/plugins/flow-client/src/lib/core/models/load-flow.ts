import { uniq, fromPairs } from 'lodash';
import { SubscribableOrPromise, Observable, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Resource } from '@flogo-web/core';
import {
  Dictionary,
  UiFlow,
  TriggerHandler,
  isSubflowTask,
} from '@flogo-web/client-core';

import { FlowResource, Trigger, ResourceFlowData } from '../interfaces';

export const loadFlow = (
  fetchSubflows: (ids: string[]) => SubscribableOrPromise<Resource<ResourceFlowData>[]>,
  convertToWebFlowModel: (
    flowObj: FlowResource,
    subflowSchema: Dictionary<Resource<ResourceFlowData>>
  ) => Promise<UiFlow>,
  resource: FlowResource
) => {
  return getSubflows(fetchSubflows, resource).pipe(
    switchMap(linkedSubflows => {
      return convertToWebFlowModel(resource, linkedSubflows).then(convertedFlow => ({
        convertedFlow,
        linkedSubflows,
      }));
    }),
    map(({ convertedFlow, linkedSubflows }) => {
      const flowTriggers = resource.data.triggers || [];
      const { triggers, handlers } = normalizeTriggersAndHandlersForAction(
        resource.id,
        flowTriggers
      );
      return {
        convertedFlow,
        linkedSubflows,
        triggers,
        handlers,
        flowTriggers,
      };
    })
  );
};

function normalizeTriggersAndHandlersForAction(
  actionId: string,
  originalTriggers: Trigger[]
) {
  const triggers: Dictionary<Trigger> = {};
  const handlers: Dictionary<TriggerHandler> = {};
  const findHandlerForAction = (handler: TriggerHandler) => handler.actionId === actionId;
  originalTriggers.forEach(trigger => {
    triggers[trigger.id] = trigger;
    const handler = trigger.handlers.find(findHandlerForAction);
    handlers[trigger.id] = { ...handler, triggerId: trigger.id };
  });
  return { triggers, handlers };
}

function getSubflowIds(flowData: ResourceFlowData): string[] {
  const allTasks = ((flowData && flowData.tasks) || []).concat(
    flowData.errorHandler && flowData.errorHandler.tasks
      ? flowData.errorHandler.tasks
      : []
  );
  const subFlowTasks = allTasks.filter(t => isSubflowTask(t.type));
  return uniq<string>(subFlowTasks.map(t => (t.settings || {}).flowPath));
}

function getSubflows(
  fetchSubflows: (ids: string[]) => SubscribableOrPromise<Resource<ResourceFlowData>[]>,
  fromResource: FlowResource
): Observable<{ [subflowId: string]: Resource<ResourceFlowData> }> {
  const subflowIds = getSubflowIds(fromResource.data);
  return from(subflowIds.length > 0 ? fetchSubflows(subflowIds) : []).pipe(
    map((subflows: Resource<ResourceFlowData>[]) => {
      return fromPairs(subflows.map(a => [a.id, a]) as [
        string,
        Resource<ResourceFlowData>
      ][]);
    })
  );
}
