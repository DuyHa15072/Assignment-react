import { useEffect, useState } from 'react'
import './index.css'
import { create, list, remove, update } from './api/productApi'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LayoutWebsite from './pages/layouts/LayoutWebsite'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ShopPage from './pages/Shops'
import DetailProduct from './pages/Shops/Detail'
import BlogsPage from './pages/Blogs'
import DetailBlog from './pages/Blogs/Detail'
import CartPage from './pages/Checkout/Cart'
import CheckoutPage from './pages/Checkout/Checkout'
import LayoutAdmin from './pages/layouts/LayoutAdmin'
import Dashboard from './pages/Admin/Dashboard'
import { IProduct } from './types/productType'
// import ProductsManager from './pages/ProductsManager'
import ProductAdd from './pages/AddProducts'
import ProductEdit from './pages/ProductEdit'
import ProductManager from './pages/ProductsManager'

function App() {
  // const [products,setProducts] = useState<IProduct>(data)
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const getProudcts = async () => {
      // const {data} = await list;
      // const data = await reponse.json();
      // setProducts(data);
      const { data } = await list();
      setProducts(data);
    }
    getProudcts()
  }, [])

  const removeItem = (id: number) => {
    //call api
    remove(id);
    //rêRender
    setProducts(products.filter(item => item._id !== id))
  }

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await create(product);
    setProducts([...products, data]);
  }

  const onHnadleUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    console.log(data);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path='/Shops'>
            <Route index element={<ShopPage products={products} />} />
            <Route path=':id' element={<DetailProduct />} />
          </Route>
          <Route path='/Blogs'>
            <Route index element={<BlogsPage />} />
            <Route path=':id' element={<DetailBlog />} />
          </Route>
          <Route path='/Cart' >
            <Route index element={<CartPage />} />
            <Route path='Checkout' element={<CheckoutPage />} />
          </Route>
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          {/* <Route index element={<Navigate to="dashboard" />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductManager onRemove={removeItem} products={products} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHnadleUpdate} />} />
          </Route>
        </Route>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div >
  )
}

export default App
