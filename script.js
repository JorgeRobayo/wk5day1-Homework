// Menu data structure
let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
  ]
//=============={{{QUERIES}}}=================

const mainEl = document.querySelector('main')
const topMenuEl = document.querySelector('#top-menu')
const topMenuLinks = topMenuEl.getElementsByTagName('a')
const subMenuEl = document.querySelector('#sub-menu')

let showingSubMenu = false
//=============={{{FUNCTIONS}}}===============

mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")

topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

menuLinks.forEach(link =>{
   const aEl = document.createElement('a')
   aEl.href = link.href
   aEl.textContent = link.text
   topMenuEl.append(aEl)
})

topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();

  if (event.target.tagName !== 'A') {
      return;
  }

  console.log('Clicked on:', event.target.textContent);

  if (event.target.classList.contains('active')) {
    
    event.target.classList.remove('active');

 
    showingSubMenu = false;

    subMenuEl.style.top = '0';


    return;
}

  
});