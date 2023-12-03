function onmouseover(product) {
  product.setAttribute('class', 'fa-solid fa-caret-up')
  console.log(product)
}
function onmouseout(product) {
  product.setAttribute('class', 'fa-solid fa-caret-down')
}
let product = document.getElementById('product-icon')
document
  .getElementById('product')
  .addEventListener('mouseover', onmouseover(product))

document
  .getElementById('product')
  .addEventListener('mouseout', onmouseout(product))
