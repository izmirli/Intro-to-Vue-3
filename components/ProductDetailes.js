app.component('product-detales', {
    prop: {
        details: {
            type: String, required: true
        }
    },
    template: /* html */ `<div>{{ details }}</div>`,
})