<demo>
    基础用法
</demo>
  <template>
  <ht-button type="success" @click.stop="open">Show Message</ht-button>
</template>
    
<script lang="ts" setup>
import HtMessage from "../../lib/Message/Message";
const open = () => {
  HtMessage({ message: "This  is a  message" });
};
</script>
  