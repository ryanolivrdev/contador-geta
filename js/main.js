const counter = document.querySelector('.counter')

counter.innerText = localStorage.getItem('counter')

function add(quantity) {
  counter.innerText = Number(counter.innerText) + quantity
  localStorage.setItem('counter', counter.textContent)
}

function withdraw(quantity) {
  counter.innerText = Number(counter.innerText) - quantity
  localStorage.setItem('counter', counter.textContent)
}

function reset() {
  counter.innerText = 0
  localStorage.setItem('counter', 0)
}
