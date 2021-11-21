app.component('review-form', {
    template: /* html */
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option v-for="stars in [1,2,3,4,5]">{{ stars }}</option>
        </select>

        <div style="margin-top: 15px;">
        <span style="font-size: 20px;">Would you recommend this product?</span><br />
        <input type="radio" id="yes" value="Yes" v-model="recommend"
          style="width: 15px; height: 15px;" /> Yes
        <input type="radio" id="no" value="No" v-model="recommend"
        style="width: 15px; height: 15px;" /> No
        </div>

        <button class="button" type="submit">Submit</button>

        </form>`,
        data() {
            return {
                name: '',
                review: '',
                rating: null,
                recommend: '',
            }
        },
        methods: {
            onSubmit() {
                if (this.name === '' || this.review === ''
                  || this.rating === null || this.recommend === '' ) {
                    alert('Review is incomleate. Pleas fill out all fields.')
                    return
                }

                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend,
                }
                this.$emit('review-submited', productReview)

                this.name = ''
                this.review = ''
                this.rating = null
                recommend = ''
            }
        }
})