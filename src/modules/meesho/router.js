export default [
    {
        path: "/meesho",
        name: "meesho",
        component: () => import("./ModuleP.vue"),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import("./views/HomePage.vue")
            },
        ]
    }
]