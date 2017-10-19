import scrollSmooth from './scrollSmooth'

export default (
  {
    query = '[href^="#"]:not([href="#"]',
    match = e => e.target.hash.substring(1),
    config,
    spy = false,
  } = {}
) => {
  const links = document.querySelectorAll(query)
  const handler = e => {
    e.preventDefault()
    const dest = document.getElementById(match(e))
    if (!dest) return
    scrollSmooth(dest, {
      ...config,
      callback: () => {},
    })
  }

  Array.from(links).map(link => {
    link.addEventListener('click', handler, false)
  })
}
