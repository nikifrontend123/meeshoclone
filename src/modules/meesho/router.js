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
                component: () => import("./views/order/OrderPage.vue")
            },
            {
                path: '/order/onhold',
                name: 'Order-OnHold',
                component: () => import("./views/order/OnHoldPage.vue")
            },
            {
                path: '/order/pending',
                name: 'Order-Pending',
                component: () => import("./views/order/PendingPage.vue")
            },
            {
                path: '/order/readytoship',
                name: 'Order-ReadyToShip',
                component: () => import("./views/order/ReadytoshipPage.vue")
            },
            {
                path: '/order/shipped',
                name: 'Order-Shipped',
                component: () => import("./views/order/ShippedPage.vue")
            },
            {
                path: '/order/cancelled',
                name: 'Order-Cancelled',
                component: () => import("./views/order/CancelledPage.vue")
            },
            {
                path: '/return',
                children: [
                    {
                        path: 'overview',
                        name: 'Return-Overview',
                        component: () => import("./views/Return/OverviewPage.vue")
                    },
                    {
                        path: 'tracking',
                        children: [
                            {
                                path: 'intransit',
                                name: 'Return-Tracking-Intransit',
                                component: () => import("./views/Return/IntransitPage.vue")
                            },
                            {
                                path: 'outfordelivery',
                                name: 'Return-Tracking-Outfordelivery',
                                component: () => import("./views/Return/OutforDelivery.vue")
                            },
                            {
                                path: 'delivered',
                                name: 'Return-Tracking-Delivered',
                                component: () => import("./views/Return/DeliveredPage.vue")
                            },
                            {
                                path: 'lost',
                                name: 'Return-Tracking-Lost',
                                component: () => import("./views/Return/LostPage.vue")
                            },
                        ]
                    },
                ]
            },

        ]
    }
]