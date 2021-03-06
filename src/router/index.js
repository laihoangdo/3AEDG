import React from 'react';
const BlogList = React.lazy(() => import("../components/blog/BlogsList"));
const HomeOne = React.lazy(() => import("../components/HomeOne"));
const Single = React.lazy(() => import("../components/blog/Single"));
const CourseDetail = React.lazy(() => import("../components/services/CourseDetail"));
const AboutUs = React.lazy(() => import("../components/aboutus"));
const NotFound = React.lazy(() => import("../modules/notFound"));



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
      path: '/tin-tuc/tat-ca',
      component: BlogList
    },
  {
    path: '/tin-tuc/:id',
    component: Single
  },
    {
        path: '/khoa-hoc/:id',
        component: CourseDetail
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

