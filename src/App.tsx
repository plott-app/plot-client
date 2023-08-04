import { ErrorBoundary } from '@sentry/react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { action as emailAuthAction } from './components/Auth/EmailForm';
import SnsAuthRedirect, {
  action as snsAuthAction,
} from './components/Auth/SnsAuthRedirect';
import './css/color.css';
import './css/global.css';
import './css/reset.css';
import Nav from './layout/Nav';
import Root from './layout/Root';
import CategoryDetail from './screens/CategoryDetail';
import CategoryGroup from './screens/CategoryGroup';
import Landing from './screens/Landing';
import Player from './screens/Player';
import Playlist from './screens/Playlist';
import Schedule, { action as scheduleAction } from './screens/Schedule';
import Statistics from './screens/Statistics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Navigate to="/landing" />,
      },
      {
        path: '/landing',
        element: <Landing />,
        action: emailAuthAction
      },
      {
        path: '/login/oauth2/code',
        children: [
          {
            path: '/login/oauth2/code/:provider',
            element: <SnsAuthRedirect />,
            action: snsAuthAction,
          },
        ],
      },
      {
        path: '/',
        element: <Nav />,
        children: [
          // {
          //   path: '/',
          //   element: <Navigate to="/playlist" />,
          // },
          {
            path: '/playlist',
            index: true,
            element: <Playlist />,
          },
          {
            path: '/schedule',
            element: <Schedule />,
            action: scheduleAction,
          },
          {
            path: '/category',
            element: <CategoryGroup />,
          },
          {
            path: '/category/:id',
            element: <CategoryDetail />,
          },
          {
            path: '/statistics',
            element: <Statistics />,
          },
          {
            path: '/player',
            element: <Player />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
