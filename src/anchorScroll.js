import scrollSmooth from './scrollSmooth'

export default (
  {
    query = '[href^="#"]:not([href="#"]',
    match = target => document.getElementById(target.hash.substring(1)),
    hashChange = true,
    scrollSmoothConfig,
  } = {}
) => {
  const links = document.querySelectorAll(query)
  const handler = e => {
    e.preventDefault()
    const dest = match(e.target)

    if (!dest) return

    if (hashChange) {
      history.replaceState(null, null, `#${dest.id}`)
    }

    scrollSmooth(dest, {
      ...scrollSmoothConfig,
    })
  }
  
  Array.from(links).map(link => {
    link.addEventListener('click', handler, false)
  })
}
