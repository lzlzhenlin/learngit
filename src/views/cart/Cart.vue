<template>
    <div>
        <h1>购物车</h1>
        <p v-for="(item,index) in goods" :key="index">{{item.name}}--{{item.num}}</p>
    </div>
</template>
<script>
// 导入mapstate方法
import {mapState} from 'vuex';
import {NavBar,Icon} from 'vant';
export default {
    computed:{
        ...mapState(["goods"])
    },
    components:{
        [NavBar,name]:NavBar,
        [Icon.name]:Icon
    }
}
</script>
<style>

</style>

