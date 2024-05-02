import {
  RouterProvider,
  // createBrowserRouter,
  createHashRouter,
  // redirect,
  // useRouteError,
} from 'react-router-dom';
import Home from '../../pages/home/home.ui';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <div>로그인 페이지</div>,
  },
  {
    path: 'register',
    element: <div>회원 가입 페이지</div>,
  },
  { path: 'profile', element: <div>프로필 페이지</div> },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
