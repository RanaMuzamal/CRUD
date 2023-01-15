import React from 'react'

function new() {
  return (
<table class="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Remove</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src={product.image} alt={product.title} height="30%" width="30%"/></th>
      <td>{product.title}</td>
      <td>{product.qty}</td>
      <td>{product.qty * product.price}</td>
    </tr>
   
  </tbody>
</table>
  )
}

export default new
