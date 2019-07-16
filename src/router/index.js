import Home from "../components/home";
import NotFound from "../modules/notFound";
import AboutUs from "../components/aboutus";



// then our route config
const routes = [
  {
      path: '/home',
      component: Home,
  },
  {
    path: '/aboutus',
    component: AboutUs
  },
  {
      path: '/',
      component: Home,
      exact: true,
  },
  {
      path: '*',
      component: NotFound,
  }
];

export default routes;

