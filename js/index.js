// 菜单集合
let firstLevelMenu = []
let firstFileMenu = []
let secondaryFile = []
// 数据
let resource = null

// 拿到数据
resource = await getData()
console.log(resource)

firstLevelMenu = resource.filter(item => item.type === 'folder')
firstFileMenu = resource.filter(item => item.type === 'file')

let uls = ''
let folders = ''
for (const item of firstLevelMenu) {
  console.log(item)
  folders += `<li><img width="120" src="/assets/imgs/folder.svg" alt="">${item.name}</li>`
}
let videos = ''
for (const item of firstFileMenu) {
  const { path } = item
  const name = path.split('/').at(-1)
  console.log('videos', name)
  videos += `<li><video width="120" height="120" controls src="${path}" alt=""></video>${name}</li>`
}
uls = folders + videos

if (innerWidth < 500) {
  const smallFolderList = document.getElementById('smallFolderList')
  smallFolderList.innerHTML = uls
}

// 获取数据
async function getData() {
  return await fetch('./resource/resource.json').then(async res => {
    return await res.json()
  })
}