import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/page1/pageone'
import page2 from '@/components/page2/pagetwo'
import detail from '@/components/detail/detail'
import search from '@/components/search/search'
import register from '@/components/register/register'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/home',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/phimmoi',
            name: 'phimmoi',
            component: page1,
        },
        {
            path: '/phimle',
            name: 'phimle',
            component: page2,
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail,
        },
        {
            path: '/search',
            name: 'search',
            component: search,
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/components/login/login')
        },

        {
            path: '/admin',
            name: 'admin',
            component: () =>
                import ('@/components/Admin'),
            children: [{
                    name: 'create',
                    path: 'create',
                    component: () =>
                        import ('../components/admin/createFilm.vue')
                },
                {
                    name: 'homeAdmin',
                    path: 'homeAdmin',
                    component: () =>
                        import ('../components/admin/homeAdmin.vue'),
                }

            ]
        },
        {
            path: '*',
            name: '404',
            component: () =>
                import ('../components/404/404.vue'),
        }


    ]
})