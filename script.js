// Menu data structure
let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ]
//=============={{{QUERIES}}}=================

const mainEl = document.querySelector('main')
const topMenuEl = document.querySelector('#top-menu')

//=============={{{FUNCTIONS}}}===============

mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")

topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
topMenuEl.classList.add('flex-around')

menuLinks.forEach(link =>{
   const aEl = document.createElement('a')
   aEl.href = link.href
   aEl.textContent = link.text
   topMenuEl.append(aEl)
})