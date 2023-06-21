import type {RouteComponent} from 'vue-router';

export const views: Record<PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)> = {
  404: () => import('./_builtin/error/NotFoundPage.vue'),
  403: () => import('./_builtin/error/NotFoundPage.vue'),
  500: () => import('./_builtin/error/UnexpectedPage.vue'),
  login: () => import('./_builtin/auth/index.vue'),
  'not-found': () => import('./_builtin/error/NotFoundPage.vue'),
  'dashboard_analytics': () => import('./dashboard/index.vue'),
  "apps_manager-user_list": () => import('./users/UsersPage.vue'),
  "apps_manager-user_edit": () => import('./users/EditUserPage.vue'),
  "apps_board": () => import('./board/pages/BoardPage.vue'),
  "apps_todo_tasks": () => import('@/views/todo/pages/TasksPage.vue'),
  "apps_todo_completed": () => import('@/views/todo/pages/CompletedPage.vue'),
  "apps_todo_label": () => import('@/views/todo/pages/LabelPage.vue'),
  "apps_chat-channel": () => import('./chart/ChatChannel.vue'),
  "pages_error_notfound": () => import('./_builtin/error/NotFoundPage.vue'),
  "pages_error_unexpected": () => import('./_builtin/error/UnexpectedPage.vue'),
  "other_menu-levels-2-1": () => import('./menulevels/lv2.1.vue'),
  "other_menu-levels-3-1": () => import('./menulevels/lv3.1.vue'),
  "other_menu-levels-3-2": () => import('./menulevels/lv3.2.vue'),
  "flowable_design": () => import('./flowable/design/index.vue'),
  "flowable_processes": () => import('./flowable/process/index.vue'),
  "flowable_processes_list": () => import('./flowable/process/list.vue'),
  "flowable_processes_preview": () => import('./flowable/process/preview.vue'),
  "flowable_process-definition": () => import('./flowable/process/definition.vue'),
  "flowable_process-definition_process-instance": () => import('./flowable/process/route/ProcessInstanceList.vue'),
  "flowable_process-definition_incident": () => import('./flowable/process/route/IncidentList.vue'),
  "flowable_process-definition_process-instance-detail": () => import('./flowable/process/component/processInstance/index.vue'),
  "form_list": () => import('./form/index.vue'),
  "form_design": () => import('./form/design/index.vue'),
  "form_definition": () => import('./form/definition.vue'),
  "my-process_start-process": () => import('./myprocess/startprocess/index.vue'),
  "my-process_start-process_start": () => import('./myprocess/startprocess/start/index.vue'),
  "my-process_list": () => import('./myprocess/list/index.vue'),
  "my-process_task": () => import('./myprocess/list/task/index.vue'),
  "my-process_task_form": () => import('./myprocess/list/task/route/form/index.vue'),
  "my-process_task_process": () => import('./myprocess/list/task/route/process/index.vue'),
  "my-process_task_processhistory": () => import('./myprocess/list/task/route/processhistory/index.vue'),
};
