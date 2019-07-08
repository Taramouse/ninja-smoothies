<template>
  <div class="home container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip indigo lighten-3">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      smoothies: [
        { title: 'Ninja Brew', slug: 'ninja-brew', ingredients: ['banana', 'rasberry', 'milk'], id: '1' },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'lemon', 'juice'], id: '2' },
        { title: 'Nickys Nightmare', slug: 'nickys-nightmare', ingredients: ['coffee', 'peanutbutter', 'milk'], id: '3' }
      ]
    }
  },
  methods: {
    deleteSmoothie (id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        // return only the smoothies to the array which do not match the smoothie to delete
        return smoothie.id != id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  margin-top: 60px;
}
.home h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.home .ingredients {
  margin: 30px auto;
}
.home .ingredients li {
  display: inline-block;
}
.home .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #90a4ae;
  font-size: 1.4em;
}
</style>
