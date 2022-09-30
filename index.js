'use strict;'
const inputTodo = document.querySelector('.input')
const ul = document.querySelector('ul')
const check = document.querySelectorAll('.todo-checkbox')
const checkArrow = document.querySelectorAll('.check')
const li = document.querySelectorAll('.list')
const liAll = document.querySelectorAll('li')
const del = document.querySelectorAll('.delete-todo')
const uncompleted = document.querySelectorAll('.uncompleted')
const complete = document.querySelector('.completed')
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const clearCompleted = document.querySelectorAll('.clear-completed')
const itemLeft = document.querySelectorAll('.items-left')
const sun = document.querySelector('.sun')
const Moon = document.querySelector('.moon')
const tHeader = document.querySelector('.todo-header')
const tCreator = document.querySelector('.todo-creator')
let localitems = JSON.parse(localStorage.getItem('list'))
let changeover = false;
let addtoStorage = false;
let Storage = [];
let unc = [];
let tcheck = [];


const leftNow = function(){
        // itemLeft
itemLeft.forEach(function(e){
     e.textContent = `${unc.length + 1} item left`
})
}
leftNow();

  inputTodo.addEventListener('keypress',function(e){
     const write = inputTodo.value
     let div = document.createElement('div')
     let img = document.createElement('img')
     img.src = './images/icon-check.svg'
    let linew = document.createElement('li')
     let divP = document.createElement('div')
    let divFlex = document.createElement('div')
    const t = document.createTextNode(write)
     let div3 = document.createElement('div')
     let img3 = document.createElement('img')
     img3.src = './images/icon-cross.svg'
     divP.appendChild(t)
     div3.appendChild(img3)
     divFlex.appendChild(divP)
     divFlex.appendChild(div3)
     div.appendChild(img)
     div.className = 'todo-checkbox'
    img.className = 'check hidden'
    div3.className = 'delete-todo hidden'
    divFlex.className = 'flex'
    linew.appendChild(div)
    linew.appendChild(divFlex)
    linew.className = 'list'
    tcheck = document.querySelectorAll('.todo-checkbox')

linew.classList.add('uncompleted')
 unc = document.querySelectorAll('.uncompleted')
 let lNew = document.querySelectorAll('.list')
if(changeover === true){
    lNew.forEach(function(e){
        e.classList.add('listx')
    })
        linew.classList.add('listx')
}
if(changeover === false){
    lNew.forEach(function(e){
        e.classList.remove('listx')
    })
        linew.classList.remove('listx')
}
// include list 
 if(e.key === 'Enter'){
      Storage.push(inputTodo.value)
       localStorage.setItem('list', JSON.stringify(Storage))
   localitems = JSON.parse(localStorage.getItem('list'))
  e.preventDefault()
  ul.prepend(linew)
 inputTodo.value = ''
 leftNow()
 }

//  themes   
 sun.addEventListener('click', function(){     changeover = true;
    lNew.forEach(function(e){
        e.classList.add('listx')
    })
            linew.classList.add('listx')
});
  Moon.addEventListener('click', function(){     changeover = false;
    lNew.forEach(function(e){
        e.classList.remove('listx')
    })
            linew.classList.remove('listx')
});
// hover
 document.querySelectorAll('.list').forEach(function(l) {
    l.addEventListener('mouseover', function(){
        const tt = l.lastElementChild
        const ll = tt.lastElementChild
         ll.classList.toggle('hidden')
    })
    l.addEventListener('mouseout', function(){
        const tt = l.lastElementChild
        const ll = tt.lastElementChild
         ll.classList.add('hidden')
    })
})
unc.forEach(function(l) {
    l.addEventListener('mouseover', function(){
        const tt = l.lastElementChild
        const ll = tt.lastElementChild
         ll.classList.toggle('hidden')
    })
    l.addEventListener('mouseout', function(){
        const tt = l.lastElementChild
        const ll = tt.lastElementChild
         ll.classList.add('hidden')
    })
})
// show completed 
complete.addEventListener('click', function(){
    document.querySelectorAll('.uncompleted').forEach(function(e){
        e.classList.add('hidden')
    })
    document.querySelectorAll('.complete').forEach(function(e){
        e.classList.remove('hidden')
    })
})
// show all
all.addEventListener('click',function(){
    document.querySelectorAll('.uncompleted').forEach(function(e){
        e.classList.remove('hidden')
    })
    document.querySelectorAll('.complete').forEach(function(e){
        e.classList.remove('hidden')
    })
})
// show active
active.addEventListener('click', function(){
    document.querySelectorAll('.complete').forEach(function(e){
        e.classList.add('hidden')
    })
    document.querySelectorAll('.uncompleted').forEach(function(e){
        e.classList.remove('hidden')
    })
})
// clear completed
clearCompleted.forEach(function(c){
    c.addEventListener('click', function(){
    document.querySelectorAll('.complete').forEach(function(e){
        console.log(e.textContent)
        e.classList.add('cleared')
    })
})
});

// delete a list
document.querySelectorAll('.delete-todo').forEach(function(e){
    e.addEventListener('click',function(f){
        const y = this.parentElement   
         const h = y.textContent
        const index = Storage.indexOf(h)  
        if(index > -1) {
            Storage.splice(index, 1)
            localStorage.setItem('list', JSON.stringify(Storage))
           localitems = JSON.parse(localStorage.getItem('list'))
            console.log(index, Storage)
        }
    const u = y.parentElement
      u.classList.remove('uncompleted')
        u.classList.add('cleared')
        unc = document.querySelectorAll('.uncompleted')
      itemLeft.forEach(function(e){
        e.textContent = `${unc.length} item left`
     });
    })
})

// check boxes
 document.querySelectorAll('.todo-checkbox').forEach(function(c){
 c.addEventListener('click', function(e){
    

  const l = c.lastElementChild
  l.classList.toggle('hidden')

      const p = this.parentElement
      const h = p.textContent
    
        const index = Storage.indexOf(h)  
        if(index > -1 ) {
            Storage.splice(index, 1)
            localStorage.setItem('list', JSON.stringify(Storage))
            localitems = JSON.parse(localStorage.getItem('list'))
        }
      
      p.classList.toggle('complete')
      p.classList.toggle('uncompleted')
      unc = document.querySelectorAll('.uncompleted')

      itemLeft.forEach(function(e){
        e.textContent = `${unc.length} item left`
     });
 })
 })
 tcheck.forEach(function(c){
 c.addEventListener('click', function(e){

  const l = c.lastElementChild
  l.classList.toggle('hidden')

      const p = this.parentElement
       const h = p.textContent
        const index = Storage.indexOf(h)  
        if(index > -1 ) {
            Storage.splice(index, 1)
            localStorage.setItem('list', JSON.stringify(Storage))
            localitems = JSON.parse(localStorage.getItem('list'))
        }
      
      p.classList.toggle('complete')
      p.classList.toggle('uncompleted')
      unc = document.querySelectorAll('.uncompleted')
      itemLeft.forEach(function(e){
        e.textContent = `${unc.length} item left`
     });
 })
 })
});


// theme
sun.addEventListener('click', function(){
    changeover = true
    Moon.classList.toggle('hidden')
    sun.classList.toggle('hidden')
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'
    body.style.backgroundImage = `url(./images/bg-desktop-light.jpg)`
    tCreator.style.backgroundColor = 'hsl(0, 0%, 98%)'
    liAll.forEach(function(e){
        e.classList.add('listx')
    })
    inputTodo.style.backgroundColor = 'hsl(0, 0%, 98%)'
    inputTodo.style.color = 'hsl(235, 19%, 35%)'
});
Moon.addEventListener('click', function(){
    changeover = false
    Moon.classList.toggle('hidden')
    sun.classList.toggle('hidden')
    const body = document.querySelector('body')
    body.style.backgroundColor = 'hsl(235, 21%, 11%)'
    body.style.backgroundImage = `url(./images/bg-desktop-dark.jpg)`
    tCreator.style.backgroundColor = 'hsl(235, 24%, 19%)'
    liAll.forEach(function(e){
        e.classList.remove('listx')
    })
    inputTodo.style.backgroundColor = 'hsl(235, 24%, 19%)'
    inputTodo.style.color = 'hsl(234, 39%, 85%)'
});
itemLeft.forEach(function(e){
    e.textContent = `${unc.length} item left`
});

// localStorage of list//////
///////////////////////////////
Storage.push(...localitems)
 const trial2 = function(){
    for(let i = 0; i < Storage.length; i++){
      const write = Storage[i]
     let div = document.createElement('div')
     let img = document.createElement('img')
     img.src = './images/icon-check.svg'
    let linew = document.createElement('li')
     let divP = document.createElement('div')
    let divFlex = document.createElement('div')
    const t = document.createTextNode(write) 
     let div3 = document.createElement('div')
     let img3 = document.createElement('img')
     img3.src = './images/icon-cross.svg'
     divP.appendChild(t)
     div3.appendChild(img3)
     divFlex.appendChild(divP)
     divFlex.appendChild(div3)
div.appendChild(img)
div.className = 'todo-checkbox'
img.className = 'check hidden'
div3.className = 'delete-todo hidden'
divFlex.className = 'flex'
linew.appendChild(div)
linew.appendChild(divFlex)
linew.className = 'list'
tcheck = document.querySelectorAll('.todo-checkbox')

linew.classList.add('uncompleted')
 unc = document.querySelectorAll('.uncompleted')
     leftNow()
 let lNew = document.querySelectorAll('.list')
 ul.prepend(linew)
if(changeover === true){
    lNew.forEach(function(e){
        e.classList.add('listx')
    })
        linew.classList.add('listx')
}
if(changeover === false){
    lNew.forEach(function(e){
        e.classList.remove('listx')
    })
        linew.classList.remove('listx')
}
// hover
 document.querySelectorAll('.list').forEach(function(l) {
    l.addEventListener('mouseover', function(){
        const tt = l.lastElementChild
        const ll = tt.lastElementChild
         ll.classList.toggle('hidden')
    })
    l.addEventListener('mouseout', function(){
        const tt = l.lastElementChild
        const ll = tt.lastElementChild
         ll.classList.add('hidden')
    })
})
 unc.forEach(function(l) {
    l.addEventListener('mouseover', function(){
        const tt = l.lastElementChild
        const ll = tt.lastElementChild
         ll.classList.toggle('hidden')
    })
    l.addEventListener('mouseout', function(){
        const tt = l.lastElementChild
        const ll = tt.lastElementChild
         ll.classList.add('hidden')
    })
})
// show completed 
complete.addEventListener('click', function(){
    document.querySelectorAll('.uncompleted').forEach(function(e){
        e.classList.add('hidden')
    })
    document.querySelectorAll('.complete').forEach(function(e){
        e.classList.remove('hidden')
    })
})
// show all
all.addEventListener('click',function(){
    document.querySelectorAll('.uncompleted').forEach(function(e){
        e.classList.remove('hidden')
    })
    document.querySelectorAll('.complete').forEach(function(e){
        e.classList.remove('hidden')
    })
})
// show active
active.addEventListener('click', function(){
    document.querySelectorAll('.complete').forEach(function(e){
        e.classList.add('hidden')
    })
    document.querySelectorAll('.uncompleted').forEach(function(e){
        e.classList.remove('hidden')
    })
})
// clear completed
clearCompleted.forEach(function(c){
    c.addEventListener('click', function(){
    document.querySelectorAll('.complete').forEach(function(e){
        e.classList.add('cleared')
    })
})
});
//  themes   
 sun.addEventListener('click', function(){     changeover = true;
    lNew.forEach(function(e){
        e.classList.add('listx')
    })
            linew.classList.add('listx')
});
  Moon.addEventListener('click', function(){     changeover = false;
    lNew.forEach(function(e){
        e.classList.remove('listx')
    })
            linew.classList.remove('listx')
});

// delete a list
document.querySelectorAll('.delete-todo').forEach(function(e){
    e.addEventListener('click',function(f){
        const y = this.parentElement  
         const h = y.textContent
    
        const index = Storage.indexOf(h)  
        if(index > -1 ) {
            Storage.splice(index, 1)
            localStorage.setItem('list', JSON.stringify(Storage))
            localitems = JSON.parse(localStorage.getItem('list'))
            console.log(index, Storage)
        }    
    const u = y.parentElement
      u.classList.remove('uncompleted')
        u.classList.add('cleared')
        unc = document.querySelectorAll('.uncompleted')
      itemLeft.forEach(function(e){
        e.textContent = `${unc.length} item left`
     });
    })
})

// check boxes
 document.querySelectorAll('.todo-checkbox').forEach(function(c){
 c.addEventListener('click', function(e){
  const l = c.lastElementChild
  l.classList.toggle('hidden')
 const p = this.parentElement
       const h = p.textContent
    
        const index = Storage.indexOf(h)  
        if(index > -1 ) {
            Storage.splice(index, 1)
            localStorage.setItem('list', JSON.stringify(Storage))
            localitems = JSON.parse(localStorage.getItem('list'))
        }
      p.classList.toggle('complete')
      p.classList.toggle('uncompleted')
      unc = document.querySelectorAll('.uncompleted')
      itemLeft.forEach(function(e){
        e.textContent = `${unc.length} item left`
     });
 })
 })
 tcheck.forEach(function(c){
 c.addEventListener('click', function(e){
  const l = c.lastElementChild
  l.classList.toggle('hidden')
      const p = this.parentElement
       const h = p.textContent
        const index = Storage.indexOf(h)  
        if(index > -1 ) {
            Storage.splice(index, 1)
            localStorage.setItem('list', JSON.stringify(Storage))
            localitems = JSON.parse(localStorage.getItem('list'))
            console.log(index, Storage)
        }
      
      p.classList.toggle('complete')
      p.classList.toggle('uncompleted')
      unc = document.querySelectorAll('.uncompleted')
      itemLeft.forEach(function(e){
        e.textContent = `${unc.length} item left`
     });
 })
 })
    }
 }
 trial2()
