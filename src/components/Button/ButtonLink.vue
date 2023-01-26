<demo>
  链接按钮
</demo>
<template>
  <ht-button theme="link" >plain</ht-button>
  <ht-button theme="link" type="primary">primary</ht-button>
  <ht-button theme="link" type="success">success</ht-button>
  <ht-button theme="link" type="warning">warning</ht-button>
  <ht-button theme="link" type="danger">danger</ht-button>
  
  <ht-button theme="link" :disabled="true">plain</ht-button>
  <ht-button theme="link" type="primary" :disabled="true">primary</ht-button>
  <ht-button theme="link" type="success" :disabled="true">success</ht-button>
  <ht-button theme="link" type="warning" :disabled="true">warning</ht-button>
  <ht-button theme="link" type="danger" :disabled="true">danger</ht-button>
</template>

<script lang="ts">
import htButton from '../../lib/Button.vue'
export default {
    components:{htButton}
}
</script>

<style>

</style>