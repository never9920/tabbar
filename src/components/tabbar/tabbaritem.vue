<template>
<div class="tab-bar-item" @click="itemclick">
  <div  v-if="isActive"><slot name="item-icon"></slot></div>
  <div  v-else><slot name="item-icon-self"></slot></div>
  <div :style="activestyle"><slot name="item-text"></slot></div>
</div>
</template>

<script>

export default {
  name: "tabbaritem",
  props:{
    path:String,
    activecolour:{
      type:String,
      default:'skyblue'
      }
  },
  data(){
    return{
      //isActive:true,
    }
  },
  computed:{
     isActive(){
        return this.$route.path.indexOf(this.path)
      },
      activestyle(){
        return this.isActive?{}:{color:this.activecolour}
      }
  },
  methods:{
    itemclick(){
        this.$router.replace(this.path).catch(error=>error)
      //console.log(itemclick)
    }
  }

}
</script>

<style>
    .tab-bar-item{
      flex:1;
      text-align: center;
      height:49px;
      font-size: 14px;

    }
    .tab-bar-item img{
        height: 24px;
        width: 24px;
        margin-top:3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }

</style>