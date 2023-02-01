<demo>
    文字描述
  </demo>
  <template>
  <ht-switch
    v-model="value1"
    active-text="Pay by month"
    inactive-text="Pay by year"
  ></ht-switch>
  <br />
  <ht-switch
    v-model="value2"
    active-text="Pay by month"
    inactive-text="Pay by year"
    style="--switch-on-color: #f1bae1; --switch-off-color: #ff4949"
  ></ht-switch>
</template>
    
<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref(true);
const value2 = ref(true);
</script>