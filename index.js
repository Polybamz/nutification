const button = document.querySelector('#mark')
const check = document.querySelectorAll('.redDot')
const number = document.querySelector('#num')
const dis = document.querySelector('.who')

button.addEventListener('click', function(){
 number.innerHTML = '0'
 Array.from(check);
 console.log(check)
  check.forEach(element => {
    element.style.background = 'none';
  })
  
 Array.from(dis);
 dis.forEach(element => {
  element.style.background = 'none';
 })
})
// button.addEventListener('click',function(){
//   check.style.background = 'transperant';
// })

