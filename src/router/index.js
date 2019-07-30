import Home from "../components/home";
import NotFound from "../modules/notFound";
import AboutUs from "../components/aboutus";
import Single from "../components/blog/Single";
import HomeOne from "../components/HomeOne";
import SingleBlog from "../components/blog/SingleBlog";



// then our route config
const routes = [
  {
      path: '/home',
      component: HomeOne,
  },
  {
    path: '/aboutus',
    component: AboutUs
  },
  {
    path: '/blog-posts/:id',
    component: Single
  },
  {
      path: '/',
      component: HomeOne,
      exact: true,
  },
  {
      path: '*',
      component: NotFound,
  }
];

export default routes;

