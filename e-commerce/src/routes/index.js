import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import CategoryPage from '../pages/CategoryPage';
import Profile from '../pages/Profile';
import ShoppingCart from '../pages/ShoppingCart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <LoginPage />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'product/:categoryName',
        element: <CategoryPage/>,
      },
      {
        path:'profile',
        element: <Profile/>,
      },
      {
        path:'cart',
        element: <ShoppingCart/>
      }
    ]
  },
]);

export default router;
