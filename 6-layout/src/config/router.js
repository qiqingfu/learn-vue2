module.exports = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "page-index" */'@/pages/Index.vue'),
    meta: {
      layout: 'FullWidthSearch',
    },
  },
  {
    path: '/view/:id/',
    component: () => import(/* webpackChunkName: "page-view" */'@/pages/view/Index.vue'),
    meta: {
      layout: 'Default',
    },
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "page-404" */'@/pages/404.vue'),
  },
];
