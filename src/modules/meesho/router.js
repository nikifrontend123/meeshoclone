export default [
    {
        path: "/meesho",
        name: "meesho",
        component: () => import("./ModuleP.vue"),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import("./views/HomePage.vue")
            },
            {
                path: '/order/onhold',
                name: 'Order',
                component: () => import("./views/OrderPage.vue")
            },
            {
                path: '/order/onhold',
                name: 'Order-OnHold',
                component: () => import("./views/OnHoldPage.vue")
            },
            {
                path: '/order/pending',
                name: 'Order-Pending',
                component: () => import("./views/PendingPage.vue")
            },
            {
                path: '/return',
                name: 'Return',
                component: () => import("./views/Return/ReturnPage.vue")
            },
            {
                path: '/return/overview',
                name: 'Return-Overview',
                component: () => import("./views/Return/OverviewPage.vue")
            },
            {
                path: '/return/tracking',
                name: 'Return-Tracking',
                component: () => import("./views/Return/ReturnTracking.vue")
            },
        ]
    }
]