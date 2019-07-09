<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field" v-for="(ing, index) in ingredients" :key="index">
        <label for="ingredient">Ingredient</label>
        <input type="text" name="ingredient" v-model="ingredients[index]">
        <i class="material-icons red-text delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient (press TAB to add another)</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'AddSmoothie',
  data () {
    return {
      title: null,
      another: null,
      ingredients: [],
      slug: null,
      feedback: null
    }
  },
  methods: {
    addSmoothie () {
      if (this.title) {
        this.feedback = null
        // create the slug
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        // console.log(this.title, this.slug, this.ingredients)
        // Save new smoothie to firestore
        db.collection('smoothies').add({
          title: this.title,
          slug: this.slug,
          ingredients: this.ingredients,
        }).then(() => {
          this.$router.push({ name: 'Home' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a smoothie title'
      }
    },
    addIng () {
      if (this.another) {
        this.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to add an ingredient'
      }
    },
    deleteIng (ing) {
      this.ingredients = this.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    }
  }
}
</script>

<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 600px;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.add-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  font-size-adjust: 1.4em;
  cursor: pointer;
}
</style>
