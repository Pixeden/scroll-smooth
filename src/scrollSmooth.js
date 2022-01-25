import { easeFunctions, isNumeric, setPosition, calcEndPoint } from "./tools";

export default (
  target,
  {
    duration = 500,
    context = window,
    offset = 0,
    ease = "easeInOutCubic",
    callback,
  } = {}
) => {
  if (typeof window !== "object") return;

  const start =
    context.scrollTop !== null && context.scrollTop !== undefined
      ? context.scrollTop
      : window.pageYOffset;
  const end = calcEndPoint(target, context, offset);
  const clock = performance.now();
  const rAF = window.requestAnimationFrame;

  const tick = () => {
    const elapsed = performance.now() - clock;
    const pos = setPosition(start, end, elapsed, duration, ease);
    if (context !== window) {
      context.scrollTop = pos;
    } else {
      window.scroll(0, pos);
    }

    if (elapsed > duration) {
      typeof callback === "function" && callback(target);
    } else {
      rAF(tick);
    }
  };

  tick();
};
