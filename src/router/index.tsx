import Login from '../containers/Login';
import ForgotEmail from '../containers/ForgotEmail';
import { createBrowserRouter } from 'react-router-dom';
import { RouteItem } from './types';
import ErrorPage from '../containers/ErrorPage';

export const indexRoutes: RouteItem[] = [
  {
    path: '/',
    element: (
      <Login />
    ),
    children: [
      // {
      //   path: '',
      //   errorElement: <NotFoundPage />,
      //   element: <AuthenticationGuard component={PageLayout} />,
      //   children: adminRoutes,
      // },
    ],
  },
  {
    path: '/forgot-email',
    element: (
      <ForgotEmail />
    ),
  },
  { path: '*', element: <ErrorPage /> },
];

const routes = [...indexRoutes];

// export const sideMenuRoutes = convertToMenuRoutes(adminRoutes);

export const router = createBrowserRouter(routes);
