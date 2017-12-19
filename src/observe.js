export default (
  {
    activeClass = 'active',
    query = '[href^="#"]:not([href="#"]',
    threshold = [0.25, 0.5, 0.75],
    detectType = 'max', // 'max' or 'min'
  } = {}
) => {
  const options = { threshold }

  const removeClass = node => node.classList.remove(activeClass)
  const addClass = node => node.classList.add(activeClass)
  
  const unsetAllActives = () => {
    document.querySelectorAll(`.${activeClass}`).forEach(removeClass)
  }

  const setActive = activeNode => {
    unsetAllActives()
    addClass(document.querySelector(`a[href="#${activeNode.id}"]`))
  }

  const callback = entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= Math[detectType](...threshold)) {
        setActive(entry.target)
      }
    })
  }

  const links = document.querySelectorAll(query)
  const observer = new IntersectionObserver(callback, options)
  const observeTarget = link => {
    const target = document.querySelector(`#${link.hash.slice(1)}`)
    observer.observe(target)
  }

  links.forEach(observeTarget)
}
