<template>
  <div class="doc-api">
    <h2 class="doc-api-title">{{ title }}</h2>
    <table>
      <thead>
        <tr>
          <th v-for="(head, index) in theads" :key="index">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tr, index) in bodyData" :key="index">
          <td v-for="(item, i) in tr" :key="i" v-html='item == "" ? "—" : item'>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    theads: { type: Array },
    bodyData: { type: Array },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.doc-api {
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  table {
    line-height: 1.5em;
    font-size: 14px;
    text-align: left;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid var(--border-color);
      td,
      th {
        padding: 0.6em 1em;
      }
      > :first-child {
        max-width: 250px;
      }
    }
  }
}
</style>