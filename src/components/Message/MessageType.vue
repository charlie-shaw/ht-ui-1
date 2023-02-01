<demo>
    不同状态
</demo>
  <template>
  <ht-button type="success" @click.stop="open1">success</ht-button>
  <ht-button type="warning" @click.stop="open2">warning</ht-button>
  <ht-button type="danger" @click.stop="open3">error</ht-button>
  <ht-button @click.stop="open4">info</ht-button>
</template>
    
<script lang="ts" setup>
import HtMessage from "../../lib/Message/Message";
const open1 = () => {
  HtMessage({
    message: "Congrats, this is a success message",
    type: "success",
  });
};
const open2 = () => {
  HtMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open3 = () => {
  HtMessage({
    message: "Oops, this is a error message.",
    type: "error",
  });
};
const open4 = () => {
  HtMessage({
    message: "This  is a  message",
    type: "info",
  });
};
</script>
  