import scrollSmooth from './scrollSmooth'

export default (query = '[href^="#"]:not([href="#"]', config) => {
  const links = document.querySelectorAll(query)
  
  Array.from(links).map(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const dest = document.getElementById(e.target.hash.substring(1))
      if (!dest) return
      scrollSmooth(dest, {
        ...config
      })
    }, false)
  })
  
}
