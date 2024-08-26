import type { RouteObject } from 'react-router-dom';

export type AntRoute = {
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: React.ReactNode;
  locale?: string | false;
  name?: string;
  key?: string;
  disabled?: boolean;
  path?: string;
  parentKeys?: string[];
  flatMenu?: boolean;
  target?: string;
};

export type RouteItem = AntRoute & RouteObject & { children?: RouteItem[] };
