import useGetElPosition from "../hooks/useGetElPosition";

export default function useIsElement(app) {
  app.directive("is-element", {
    mounted(el: HTMLElement, binding, vnode: any) {
      if (window.ontouchstart) return;

      el.addEventListener("mouseenter", () => {
        binding.value(useGetElPosition(el));
        vnode.props["onUpdate:tooltip"](true);
      });
      el.addEventListener("mouseleave", () => {
        binding.value(useGetElPosition(el));
        vnode.props["onUpdate:tooltip"](false);
      });
      el.addEventListener("mousedown", () => {
        binding.value(useGetElPosition(el));
        vnode.props["onUpdate:tooltip"](false);
      });
    },
  });
}
