import { reactive } from "vue";
export default function useGetElPositon(el: HTMLElement) {
  const position = reactive(el.getBoundingClientRect());

  return position;
}
