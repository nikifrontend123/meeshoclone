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
                detial: [
                    {
                        name: 'Quantity',
                        value: '1 Unit'
                    },
                    {
                        name: 'Size',
                        value: 'S'
                    },
                    {
                        name: 'SKU ID',
                        value: 'DNB109'
                    },
                    {
                        name: 'Meesho ID',
                        value: '54s564'
                    },
                    {
                        name: 'Sub Order ID',
                        value: '12456'
                    },
                ],
                date: '10 Jun',
                time: '10.38 am',
                label: 'Downloaded',
                partner: 'PocketShip'
            },
            {
                id: 2,
                oid: '1325462',
                name: 'Stylish western girl dress',
                img: 'https://images.meesho.com/images/products/191979382/bf6sa_400.webp',
                detial: [
                    {
                        name: 'Quantity',
                        value: '1 Unit'
                    },
                    {
                        name: 'Size',
                        value: 'M'
                    },
                    {
                        name: 'SKU ID',
                        value: 'AFB109'
                    },
                    {
                        name: 'Meesho ID',
                        value: '64js64'
                    },
                    {
                        name: 'Sub Order ID',
                        value: '12236'
                    },
                ],
                date: '10 Jun',
                time: '10.38 am',
                label: 'Downloaded',
                partner: 'Shadowfax'
            },
        ],
        inventory: [
            {
                id: 1,
                name: 'Pretty Partywear Women Top & Bottom Sets',
                img: 'https://images.meesho.com/images/products/192854756/nfqbt_400.webp',
                detail: [
                    {
                        text: 'Catalog ID',
                        number: '320451',
                    },
                    {
                        text: 'Category',
                        number: 'asdasd',
                    },
                    {
                        text: 'SKUs',
                        number: '4',
                    },
                    {
                        text: 'Ratings',
                        number: '4',
                        icon: 'bi bi-star-fill'
                    },
                    {
                        text: 'Order in Last 30 Days',
                        number: '935',
                    },
                ],
                outofstock: '0',
                lowstock: '3',
                activation: 'Delayed'
            },
            {
                id: 2,
                name: 'Partywear Women Top',
                img: 'https://images.meesho.com/images/products/191979382/bf6sa_400.webp',
                detail: [
                    {
                        text: 'Catalog ID',
                        number: '320451',
                    },
                    {
                        text: 'Category',
                        number: 'asdasd',
                    },
                    {
                        text: 'SKUs',
                        number: '4',
                    },
                    {
                        text: 'Ratings',
                        number: '4',
                        icon: 'bi bi-star-fill'
                    },
                    {
                        text: 'Order in Last 30 Days',
                        number: '935',
                    },
                ],
                outofstock: '0',
                lowstock: '5',
                activation: 'Delayed'
            },
        ],
        activeProduct: {},
        returnSummries: [
            {
                id: 1,
                text: 'Customer Return Rate',
                num1: 35.49,
                num2: 16.89,
                num2color: 'text-danger'
            },
            {
                id: 2,
                text: 'Courier Return(RTO) Rate',
                num1: 35.49,
                num2: 16.89,
                num2color: 'text-success'
            },
            {
                id: 3,
                text: 'Return Benefit from Dual Pricing ',
                num1: 35.49,
                num2: 16.89,
                num2color: 'text-danger'
            },
            {
                id: 4,
                text: 'Approved Claims',
                num1: 35.49,
                num2: 16.89,
                num2color: 'text-success'
            },
        ],
        returns: [
            {
                id: 1,
                orderID: 788483440489,
                name: 'Urbane Elegant Women Top',
                details: [
                    {
                        name: 'ProductId',
                        value: 113115807
                    },
                    {
                        name: 'Category',
                        value: 'Women'
                    },
                    {
                        name: 'Order Delivered',
                        value: 812
                    },
                    {
                        name: 'Customer Return',
                        value: 21.06
                    },
                ],
                img: 'images/c5.jpg',
                qty: '1 unit',
                size: 'S',
                Sku: 'D222',
                category: 'Top & Bottom Sets',
                shippingFee: 0,
                reason: 'N/A',
                returnType: 'Courier Return(RTO)',
                awb: 'SF627219517FPL',
                status: 'Delivering Today',
                courierBy: 'Shadowfax'
            },

        ],
        activeCanvas: {},
        activeInventory: {},
        intransits: [
            {
                id: 1,
                orderID: 788483440489,
                name: 'Urbane Elegant Women Top',
                details: [
                    {
                        name: 'Quantity',
                        value: '1 unit'
                    },
                    {
                        name: 'Size',
                        value: 'L'
                    },
                    {
                        name: 'SKU ID',
                        value: 'D004_GREY'
                    },
                    {
                        name: 'Return Shipping Fee',
                        value: 'Courier Return(RTO)'
                    },
                    {
                        name: 'AWB Number',
                        value: 10009680888
                    },
                ],
                shipmentdetails: [
                    {
                        name: 'Sub order ID',
                        value: 788483440489
                    },
                    {
                        name: 'Return type',
                        value: 'Courier Return(RTO)'
                    },
                    {
                        name: 'Primary Return Reason',
                        value: 'N/A'
                    },
                    {
                        name: 'Secondary Return Reason',
                        value: 'N/A'
                    },
                    {
                        name: 'Return Shipping Fee',
                        value: '0'
                    },
                    {
                        name: 'Courier Partner',
                        value: 'Ecom Express'
                    },
                    {
                        name: 'AWB Number',
                        value: 10009680888
                    },
                ],
                img: 'images/c5.jpg',
                qty: '1 unit',
                size: 'S',
                Sku: 'D222',
                category: 'Top & Bottom Sets',
                shippingFee: 0,
                reason: 'N/A',
                returnType: 'Courier Return(RTO)',
                awb: 'SF627219517FPL',
                status: 'Delivering Today',
                courierBy: 'Shadowfax'
            },

        ],
        activeIntransit: {}
    },
    getters: {
        getBottomNavMenuItems(state) {
            return state.bottomNavMenuItems;
        },
        getOrders(state) {
            return state.orders;
        },
        getDashboardStats(state) {
            return state.dashboardStats;
        },
        getReturnSummries(state) {
            return state.returnSummries;
        },
        getReturns(state) {
            return state.returns;
        },
        getActiveCanvas(state) {
            return state.activeCanvas;
        },
        getInventories(state) {
            return state.inventory;
        },
        getActiveInventory(state) {
            return state.activeInventory;
        },
        getActiveProduct(state) {
            return state.activeProduct;
        },
        getIntransits(state) {
            return state.intransits;
        },
        getActiveIntransit(state) {
            return state.activeIntransit;
        },
    },

    mutations: {
        selectCanvas(state, canvas) {
            state.activeCanvas = canvas;
        },
        hideCanvas(state) {
            state.activeCanvas = {};
        },
        selectInventory(state, inventory) {
            state.activeInventory = inventory;
        },
        hideInventory(state) {
            state.activeInventory = {};
        },
        selectIntransit(state, intransit) {
            state.activeIntransit = intransit;
        },
        hideIntransit(state) {
            state.activeIntransit = {};
        },
        selectProduct(state, inventory) {
            state.activeProduct = inventory;
        },
        hideProduct(state) {
            state.activeProduct = {};
        },

    },
    actions: {
        selectCanvas({ commit }, canvas) {
            commit("selectCanvas", canvas);
        },
        hideCanvas({ commit }) {
            commit("hideCanvas");
        },
        selectInventory({ commit }, inventory) {
            commit('selectInventory', inventory);
        },
        hideInventory({ commit }) {
            commit('hideInventory');
        },
        selectProduct({ commit }, inventory) {
            commit('selectProduct', inventory);
        },
        hideProduct({ commit }) {
            commit('hideProduct');
        },
        selectIntransit({ commit }, intransit) {
            commit("selectIntransit", intransit);
        },
        hideIntransit({ commit }) {
            commit("hideIntransit");
        },
    }
}
