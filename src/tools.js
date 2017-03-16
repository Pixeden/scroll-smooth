export const easeFunctions = {
  linear: (t) => t,
  easeInQuad: (t) => t*t,
  easeOutQuad: (t) => t*(2-t),
  easeInOutQuad: (t) => t<.5 ? 2*t*t : -1+(4-2*t)*t,
  easeInCubic: (t) => t*t*t,
  easeOutCubic: (t) => (--t)*t*t+1,
  easeInOutCubic: t => t < .5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
  easeInQuart: (t) => t*t*t*t,
  easeOutQuart: (t) => 1-(--t)*t*t*t,
  easeInOutQuart: (t)=> t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
  easeInQuint: (t) => t*t*t*t*t,
  easeOutQuint: (t) => 1+(--t)*t*t*t*t,
  easeInOutQuint: (t) => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t,
}

export const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n)

export const setPosition = (begin, end, elapsed, duration, ease = 'easeInOutCubic') => {
    return elapsed > duration ? end
      : begin + (end - begin) * easeFunctions[ease](elapsed / duration)
}

export const calcEndPoint = (target, context = window, offset = 0) => {
  if (isNumeric(target)) {
    return parseInt(target) + offset
  }
  
  const y = context === window
    ? window.pageYOffset 
    : context.scrollTop - context.getBoundingClientRect().top
    
  const distance = target.nodeName.toLowerCase() === 'html' ? -y 
    : target.getBoundingClientRect().top + y
    
  return distance + offset
}
