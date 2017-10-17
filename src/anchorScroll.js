import scrollSmooth from './scrollSmooth'

export default (query = '[href^="#"]:not([href="#"]', config) => {
  const links = document.querySelectorAll(query)

  const handler = e => {
    e.preventDefault()
    const dest = document.getElementById(e.target.hash.substring(1))
    if (!dest) return
    scrollSmooth(dest, {
      ...config,
      callback: a => console.log(e.target)
    })
  }

  Array.from(links).map(link => {
    link.addEventListener('click', handler, false)
  })
}
