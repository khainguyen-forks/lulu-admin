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
  "flowable_design": () => import('./menulevels/lv3.2.vue'),
};
