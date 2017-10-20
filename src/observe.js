export default (
  {
    query = '[href^="#"]:not([href="#"]',
    match = target => document.getElementById(target.hash.substring(1)),
    matchLink = target => document.querySelector(`[href="#${target.id}"]`),
  } = {}
) => {
  const options = {
    threshold:  [0, 0.25, 0.5, 0.75, 1],
  }
  const links = document.querySelectorAll(query)
  const linksArr = Array.from(links)
  const elems = linksArr.map(link => link.hash.slice(1))
  let targets = []
  let targetIndices = {}
  let indicesInViewPort = []
  elems.map((id, index) => {
    targets.push(document.getElementById(id))
    targetIndices[id] = index
  })
  

  const callback = entries => {
    let oldTargetIndex = indicesInViewPort[0] || 0
    entries.forEach(entry => {
      update(entry, oldTargetIndex)
    })

    if (indicesInViewPort.length === 0) {
      return
    }
    if (oldTargetIndex === indicesInViewPort[0]) {
      return
    }

    linksArr[indicesInViewPort[0]].classList.add('active')
    linksArr[oldTargetIndex].classList.remove('active')
  }

  const update = (entry, oldTargetIndex) => {
    let index = targetIndices[entry.target.id]
    if (entry.intersectionRatio === 0) {
      let indexInViewPort = indicesInViewPort.indexOf(index)
      indicesInViewPort.splice(indexInViewPort, 1)
    } else {
      if (index < oldTargetIndex) {
        indicesInViewPort.unshift(index)
      } else if (index > indicesInViewPort[indicesInViewPort.length - 1]) {
        indicesInViewPort.push(index)
      } else {
        indicesInViewPort.push(index)
        indicesInViewPort.sort()
      }
    }
  }

  const observer = new IntersectionObserver(callback, options)
  targets.forEach(target => observer.observe(target))

}
