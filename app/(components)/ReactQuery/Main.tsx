"use client"
import React, { useState } from 'react'
import FetchProducts from './FetchProducts'
import { QueryClient, QueryClientProvider } from 'react-query';
import AddProduct from './AddProduct';

const queryClient = new QueryClient();

type Product = {
  title:string;
  description:string;
  price:string;
}

const Main = () => {
  const [addedProduct,setAddProduct] = useState<Product[]>([])
  const handleAddedProduct = (data:Product)=>{
    setAddProduct([...addedProduct,data])
  }
  return (
    <QueryClientProvider client={queryClient}>
        <AddProduct handleAddedProduct={handleAddedProduct}/>
       <FetchProducts addedProduct={addedProduct}/>
    </QueryClientProvider>
  )
}

export default Main
