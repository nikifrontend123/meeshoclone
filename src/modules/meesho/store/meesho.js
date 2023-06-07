export default {
    namespaced: true,
    state:{
        bottomNavMenuItems: [
            {
                id: 1,
                name: 'Home',
                icon: 'bi bi-journal-plus',
                route: 'Home', 
            },
            {
                id: 2,
                name: 'Order',
                icon: 'bi bi-box-seam',
                route: 'Order-OnHold', 
            },
            // {
            //     id: 3,
            //     name: 'Returns',
            //     icon: 'bi bi-truck',
            //     route: 'Home',  
            // },
            // {
            //     id: 4,
            //     name: 'Inventory',
            //     icon: 'bi bi-x-octagon',
            //     route: 'Home', 
            // },
            // {
            //     id: 5,
            //     name: 'Menu',
            //     icon: 'bi bi-journal-check',
            //     route: 'Home', 
            // },
        ],
    },
    getters:{
        getBottomNavMenuItems(state) {
            return state.bottomNavMenuItems;
        },
    },
    mutations:{},
    actions:{}
}