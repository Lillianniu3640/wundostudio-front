import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'wundo studio',
      showMenu: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: 'Register | wundo studio',
      showMenu: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: 'Login | wundo studio',
      showMenu: false
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      showMenu: false
    },
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "adminHome" */ '../views/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'AdminHome | wundo studio'
        }
      },
      {
        path: 'works',
        name: 'AdminWorks',
        component: () => import(/* webpackChunkName: "adminWorks" */ '../views/AdminWorks.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'AdminWorks | wundo studio'
        }
      },
      {
        path: 'messages',
        name: 'AdminMessages',
        component: () => import(/* webpackChunkName: "adminWessages" */ '../views/AdminMessages.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'AdminMessages | wundo studio'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About | wundo studio',
      showMenu: true
    }
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue'),
    meta: {
      title: 'Works | wundo studio',
      showMenu: true
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue'),
    meta: {
      title: 'Services | wundo studio',
      showMenu: true
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: 'Contact | wundo studio',
      showMenu: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && store.state.jwt.token.length === 0) {
    next('/login')
  } else if (to.meta.admin && store.state.user.role !== 0) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
