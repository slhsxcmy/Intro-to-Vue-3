const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            if (id >= 0) {
                this.cart.push(id)
            } else {
                this.cart.pop()
            }

        }
    }
})