const bogScroll = document.getElementById('header')
const content = document.getElementById('content')
const folder = document.getElementById('folder')
if (innerWidth < 500) {
  [bogScroll, content].forEach(item => {
    item.style.display = 'none'
  })
} else {
  folder.style.display = 'none'
}
