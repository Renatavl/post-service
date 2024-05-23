import PostsViews from './views/PostsViews';
import UserViews from './views/UsersViews';
import OnePostViews from './views/OnePostViews';
import EditPostViews from './views/EditPostViews';
import CreatePostViews from './views/CreatePostViews';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserViews />,
  },

  {
    path: '/user/:Id',
    element: <PostsViews />,
  },

  {
    path: '/post/:Id',
    element: <OnePostViews />,
  },

  {
    path: '/create/post',
    element: <CreatePostViews />,
  },

  {
    path: '/update/post/:Id',
    element: <EditPostViews />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
