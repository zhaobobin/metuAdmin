export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      {
        name: 'user-login',
        path: '/user/login',
        component: './User/Login',
      },
      {
        name: 'user-register',
        path: '/user/register',
        component: './User/Register',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // authority: ['admin'],
    routes: [
      // default
      { path: '/', redirect: '/welcome' },

      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },

      {
        path: '/member',
        name: 'member',
        icon: 'user',
        routes: [
          { path: '/member', redirect: '/member/user' },
          {
            path: 'user',
            name: 'user-list',
            component: './UserManage/UserList',
          },
          {
            path: '/user/detail/:id',
            name: 'user-detail',
            hideInMenu: true,
            component: './UserManage/UserDetail',
          },
          {
            path: 'circle',
            name: 'circle-list',
            component: './UserManage/CircleList',
          },
          {
            path: '/circle/detail/:id',
            name: 'circle-detail',
            hideInMenu: true,
            component: './UserManage/CircleDetail',
          },
        ]
      },

      {
        path: '/content',
        name: 'content',
        icon: 'project',
        routes: [
          {
            name: 'article-list',
            path: 'article',
            component: './ContentManage/ArticleList',
          },
          {
            name: 'article-add',
            path: 'article/add',
            hideInMenu: true,
            component: './ContentManage/ArticleAdd',
          },
          {
            name: 'article-edit',
            path: 'article/edit/:id',
            hideInMenu: true,
            component: './ContentManage/ArticleEdit',
          },
          {
            name: 'photo-list',
            path: 'photo',
            component: './ContentManage/PhotoList',
          },
          {
            name: 'photo-detail',
            path: 'photo/detail/:id',
            hideInMenu: true,
            component: './ContentManage/PhotoDetail',
          },
          {
            name: 'oss-list',
            path: 'oss',
            component: './ContentManage/OssList',
          },
          {
            name: 'oss-detail',
            path: 'oss/detail/:id',
            hideInMenu: true,
            component: './ContentManage/OssDetail',
          },
          {
            name: 'tag-list',
            path: 'tag',
            component: './ContentManage/TagList',
          },
        ]
      },

      {
        path: '/demo',
        name: 'demo',
        icon: 'project',
        routes: [
          {
            name: 'table-list',
            path: 'table-list',
            component: './Demo/table-list',
          },
          {
            name: 'basic-form',
            path: 'basic-form',
            component: './Demo/basic-form',
          },
          {
            name: 'advanced-form',
            path: 'advanced-form',
            component: './Demo/advanced-form',
          },
          {
            name: 'advanced-profile',
            path: 'advanced-profile',
            component: './Demo/advanced-profile',
          },
        ]
      },

    ],
  },
];
