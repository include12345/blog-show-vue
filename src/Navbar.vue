<template>
    <div class="navbar-box navbar-skin">
        <div class="navbar-menu">
            <router-link :to="{ path: '/'}" class="navbar-item logo" :class="{'active':$route.name !== 'apps'}" title="首页">
            首页
            </router-link>
        </div>

    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    
}
</script>


