import { createHashRouter, Navigate } from 'react-router-dom';

import Docs from './app/Docs';
import PageBeat from './app/Docs/pages/Beat';
import Changelog from './app/Docs/pages/Changelog';
import PageFade from './app/Docs/pages/Fade';
import PageFlip from './app/Docs/pages/Flip';
import PageInstallation from './app/Docs/pages/Installation';
import PageRotate from './app/Docs/pages/Rotate';
import PageSpin from './app/Docs/pages/Spin';
import Error from './app/Error';
import Home from './app/Home';
import Icon from './app/Icon';
import Icons from './app/Icons';
import Layout from './design/layout/Layout';

const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/icons',
        element: <Icons />
      },
      {
        path: '/icons/:slug',
        element: <Icon />
      },
      {
        path: '/docs',
        element: <Docs />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Navigate to="installation" replace />
          },
          {
            path: 'installation',
            element: <PageInstallation />
          },
          {
            path: 'spin',
            element: <PageSpin />
          },
          {
            path: 'rotate',
            element: <PageRotate />
          },
          {
            path: 'flip',
            element: <PageFlip />
          },
          {
            path: 'beat',
            element: <PageBeat />
          },
          {
            path: 'fade',
            element: <PageFade />
          },
          {
            path: 'changelog',
            element: <Changelog />
          }
        ]
      },
      {
        path: '/changelog',
        element: <Docs />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Changelog />
          }
        ]
      }
    ]
  }
]);

export default router;
