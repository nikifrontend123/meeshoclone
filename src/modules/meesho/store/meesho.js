export default {
    namespaced: true,
    state: {
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
            {
                id: 3,
                name: 'Returns',
                icon: 'bi bi-truck',
                route: 'Return-Overview',
            },
            {
                id: 4,
                name: 'Inventory',
                icon: 'bi bi-x-octagon',
                route: 'Inventory-Active-Stock', 
            },
            {
                id: 5,
                name: 'Menu',
                icon: 'bi bi-journal-check',
                route: 'Menu', 
            },
        ],
        dashboardStats: [
            {
                name: 'Pending Orders',
                value: '8',
            },
            {
                name: 'Downloads Labels',
                value: '0',
            },
            {
                name: 'Out of Stock',
                value: '28',
            },
            {
                name: 'Low Stock',
                value: '130',
            },
            {
                name: 'Barcoded Packets',
                value: 'Scan Now',
            }
        ],
        orders: [
            {
                id: 1,
                oid: '1325462',
                name: 'Stylish western girl dress',
                img: 'https://images.meesho.com/images/products/192854756/nfqbt_400.webp',
                qty: '1',
                size: 'S',
                skuId: 'DNB109',
                meeshoid: '8e452xw',
                suborderid: '1235464',
                date: '10 Jun',
                time: '10.38 am'
            },
        ]
    },
    getters: {
        getBottomNavMenuItems(state) {
            return state.bottomNavMenuItems;
        },
    },
    mutations: {},
    actions: {}
}