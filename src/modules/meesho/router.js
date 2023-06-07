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
        ]
    }
]