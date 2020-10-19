<!--  -->
<template>
  <tabbar>
      <tabbaritem path="/home" activecolour="pink">
        <img slot="item-icon" src="../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-self" src="../assets/img/tabbar/home-self.png" alt="">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/catagory" activecolour="red">
        <img slot="item-icon" src="../assets/img/tabbar/catagroy.png" alt="">
        <img slot="item-icon-self" src="../assets/img/tabbar/catagroy-self.png" alt="">
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activecolour="skyblue">
        <img slot="item-icon" src="../assets/img/tabbar/car.png" alt="">
        <img slot="item-icon-self" src="../assets/img/tabbar/car-self.png" alt="">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activecolour="blue">
        <img slot="item-icon" src="../assets/img/tabbar/me.png" alt="">
        <img slot="item-icon-self" src="../assets/img/tabbar/me-self.png" alt="">
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
</template>

<script>
import tabbar from '../components/tabbar/tabbar'
import tabbaritem from '../components/tabbar/tabbaritem'
export default {
name:"maintabbar",
  data () {
    return {
    };
  },

  components: {
      tabbar,
      tabbaritem
  },

  computed: {},

  methods: {}
}

</script>
<style>
</style>