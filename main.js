const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            const lastInstence = this.cart.lastIndexOf(id)
            if (lastInstence >= 0) {
                this.cart.splice(lastInstence, 1)
            } else {
                console.log(`no id ${id} at array: ${this.cart}`)
            }
        }
    }
})
