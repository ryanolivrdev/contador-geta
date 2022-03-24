const counter = document.querySelector('.counter')

function add_1() {
  counter.innerText = Number(counter.innerText) + 1
}

function add_10() {
  counter.innerText = Number(counter.innerText) + 10
}

function withdraw_1() {
  counter.innerText = Number(counter.innerText) - 1
}

function withdraw_10() {
  counter.innerText = Number(counter.innerText) - 10
}
