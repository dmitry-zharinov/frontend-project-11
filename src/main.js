import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const form = document.querySelector('.rss-form')
const input = document.querySelector('#rssUrl')

console.log('main.js loaded')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const url = input.value.trim()
  if (url.length === 0) return

  console.log('RSS URL:', url)

  form.reset()
  input.focus()
})
