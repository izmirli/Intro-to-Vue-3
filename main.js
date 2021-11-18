const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            onSale: true,
            selectedVariant: 0,
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            const onSaleDisplay = this.onSale ? ` is on sale 🔥` : ''
            return `${this.brand}'s ${this.product}${onSaleDisplay}`
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0
        },
        curColor() {
            let color = this.variants[this.selectedVariant].color
            return color
        },
    }
})
