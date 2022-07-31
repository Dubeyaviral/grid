import React from 'react'
import Navbar from './Navbar'

function Fashion() {
  return (
    <div>
        <Navbar/>
        <div className="container">
        <div class="card mb-3">
  <img src={require("../essentials/fashion.jpg")} style={{height:"300px"}} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    </div>
  )
}

export default Fashion