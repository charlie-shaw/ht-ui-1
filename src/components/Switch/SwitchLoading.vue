<demo>
    加载状态
  </demo>
  <template>
  <ht-switch v-model="value1" loading></ht-switch>
  <br />
  <ht-switch
    v-model="value2"
    loading
    style="--switch-on-color: #f1bae1; --switch-off-color: #ff4949"
  ></ht-switch>
</template>
    
<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref(true);
const value2 = ref(false);
</script>