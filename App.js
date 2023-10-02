import React from 'react'
import Home from './routes/Home'
import About from './routes/About'
import Products from './routes/Products'
import Product from './routes/Product'
import Error from './routes/Error'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        {/* <a href='/about' >About</a> */}
        {/* in above whole page is refresh therefore we use react Link in which the page will not reload */}
        
        <Link to='/'>Home</Link> {'  '}
        <Link to="/about" >About</Link> {'   '}
        <Link to='/products'>Products</Link>{'   '}
        <Link to='/product'>Product</Link>{'   '}

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path="/product/:pid" element={<Product />} />
          <Route path='*' element={<Error />} />
          {/* Error will be the last Route */}
        </Routes>
      </Router>
    </div>
  )
}

export default App