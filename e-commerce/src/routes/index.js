import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import CategoryPage from '../pages/CategoryPage';
import ShoppingCart from '../pages/ShoppingCart'
import PaymentPage from '../components/PaymentPage';
import ProfilePage from '../pages/ProfilePage';

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
        element: <ProfilePage/>,
      },
      {
        path:'cart',
        element: <ShoppingCart/>
      },
      {
        path:'payment',
        element: <PaymentPage/>
      },
    ]
  },
]);

export default router;
