import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  ARTICLE: 'article',
  BEITMO: 'beitmo',
  TASKS: 'tasks',
  SHOP: 'shop',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, "/", []),
      createPanel(
        DEFAULT_VIEW_PANELS.ARTICLE,
        `/${DEFAULT_VIEW_PANELS.ARTICLE}`,
        []
      ),
      createPanel(
        DEFAULT_VIEW_PANELS.BEITMO,
        `/${DEFAULT_VIEW_PANELS.BEITMO}`,
        []
      ),
      createPanel(
        DEFAULT_VIEW_PANELS.TASKS,
        `/${DEFAULT_VIEW_PANELS.TASKS}`,
        []
      ),
      createPanel(DEFAULT_VIEW_PANELS.SHOP, `/${DEFAULT_VIEW_PANELS.SHOP}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
