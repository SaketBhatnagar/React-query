"use client"
import React from 'react';
import { useQuery } from 'react-query';


type Product = {
  title:string;
  description:string;
  price:string;
}

type Props = {
  addedProduct:Product[]
}

const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  return response.json();
};

const FetchProducts = (props:Props) => {
  const { data: products, isLoading, isError } = useQuery('products', fetchProducts);

    console.log(products);
    

  if (isLoading) return  <div className='flex flex-col gap-11 py-11 px-28 '>
  <h1 className='text-4xl font-medium text-center'>Product List</h1>
    <div className='text-center text-xl'>Loading...</div>
</div>;


  if (isError) return 
  <div className='flex flex-col gap-11 py-11 px-28 '>
  <h1 className='text-4xl font-medium text-center'>Product List</h1>
    <div className='text-center text-xl text-red-500'>Erro Fetching Data!</div>
</div>;

  return (
    <div className='flex flex-col gap-11 py-11 px-28 '>
      <h1 className='text-4xl font-medium text-center'>Product List</h1>
      <ul className='flex flex-col gap-4'>

      {/* displaying added products */}
      {props.addedProduct.map((product: any) => (
          <li key={product.id} className=' hover:shadow-2xl shadow-lg rounded-md p-3 flex gap-2 flex-col'>
            <h3 className='font-semibold text-lg underline '>{product.title}</h3>
             <p>{product.description}</p> 
             <p className='text-emerald-500 font-medium'>Price : ${product.price}</p>
          </li>
        ))}



        {products.products.map((product: any) => (
          <li key={product.id} className=' hover:shadow-2xl shadow-lg rounded-md p-3 flex gap-2 flex-col'>
            <h3 className='font-semibold text-lg underline '>{product.title}</h3>
             <p>{product.description}</p> 
             <p className='text-emerald-500 font-medium'>Price : ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchProducts;
