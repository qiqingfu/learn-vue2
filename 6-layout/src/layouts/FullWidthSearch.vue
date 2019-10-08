<template>
  <div class="layout-full">
    <main>
      <my-search/>
      <my-locale class="mt20" />
      <router-view></router-view>
    </main>
    <my-footer/>
  </div>
</template>

<script>
import MySearch from '@/components/Search.vue';
import MyLocale from '@/components/Locale.vue';
import MyFooter from '@/components/Footer.vue';

export default {
  name: 'FullWidthSearch',
  components: {
    MySearch,
    MyLocale,
    MyFooter,
  },
};
</script>
<style lang="scss" scoped>
  // 吸底样式
  .layout-full {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    > main {
      flex: 1 1 auto;
    }
  }
</style>
