export default [
    {
        path: "/meesho",
        name: "meesho",
        component: () => import("./ModuleP.vue"),
        children: [
            {
                path: '/',
                name: 'Login',
                component: () => import("@/views/LoginPage.vue")
            },
            {
                path: '/home',
                name: 'Home',
                component: () => import("./views/dashboard/HomePage.vue")
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
                        component: () => import("./views/Return/OverviewPage.vue"),
                        // children: [
                        //     {
                        //         path: '/productPerformance',
                        //         name: 'Product-Performance',
                        //         component: () => import("./views/Return/ProductPerformance.vue")
                        //     },
                        // ]
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
            {
                path: '/inventory',
                children: [
                    {
                        path: 'active',
                        children: [
                            {
                                path: 'stock',
                                name: 'Inventory-Active-Stock',
                                component: () => import("./views/inventory/AllStockPage.vue")
                            },
                            {
                                path: 'outofstock',
                                name: 'Inventory-Active-OutOfStock',
                                component: () => import("./views/inventory/OutOfStockPage.vue")
                            },
                            {
                                path: 'lowstock',
                                name: 'Inventory-Active-LowStock',
                                component: () => import("./views/inventory/LowStockPage.vue")

                            },
                        ]
                    },
                    {
                        path: '/inventory/pending',
                        name: 'Inventory-Pending',
                        component: () => import("./views/inventory/PendingPage.vue")
                    },
                    {
                        path: '/inventory/blocked',
                        name: 'Inventory-Blocked',
                        // component: () => import("./views/inventory/BlockedPage.vue"),
                        children: [
                            {
                                path: 'duplicate',
                                name: 'Inventory-Blocked-Duplicate',
                                component: () => import("./views/inventory/DuplicatePage.vue")
                            },
                            {
                                path: 'poorquality',
                                name: 'Inventory-Blocked-PoorQuality',
                                component: () => import("./views/inventory/PoorPage.vue")
                            },
                            {
                                path: 'other',
                                name: 'Inventory-Blocked-Other',
                                component: () => import("./views/inventory/OtherPage.vue")
                            },
                        ]
                    },
                    {
                        path: '/inventory/paused',
                        name: 'Inventory-Paused',
                        component: () => import("./views/inventory/PausedPage.vue")
                    },
                ]

            },
            {
                path: '/menu',
                name: 'Menu',
                component: () => import("./views/menu/MenuPage.vue")
            },
            {
                path: '/setting',
                name: 'Setting',
                component: () => import("./views/settings/SettingPage.vue")
            },
            {
                path: '/changepassword',
                name: 'ChangePassword',
                component: () => import("./views/settings/ChangePassword.vue")
            },
            {
                path: '/whatsappnotification',
                name: 'WhatsappNotification',
                component: () => import("./views/settings/WhatsAppNoti.vue")
            },
            {
                path: '/legal',
                name: 'Legal',
                component: () => import("./views/settings/LegalPage.vue")
            },
            {
                path: '/emailnoti',
                name: 'EmailNotification',
                component: () => import("./views/settings/EmailNoti.vue")
            },



        ]
    }
]