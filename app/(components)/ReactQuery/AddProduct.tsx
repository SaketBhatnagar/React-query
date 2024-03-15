"use client"

import React, {  useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

type Product = {
    title:string;
    description:string;
    price:string;
  }

type Props={
    handleAddedProduct: (data:Product) => void;  
}

const AddProduct = (props:Props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const queryClient = useQueryClient();

  const addProductMutation = useMutation((newProduct: any) => {
    return fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProductMutation.mutate({ name, description, price });
    props.handleAddedProduct({title:name,description,price})
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className='flex justify-center  py-20 items-center flex-col gap-8'>
      <h1 className='text-3xl font-medium'>Add New Product</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-8 '>
        <input  className='border-2 p-2 text-sm rounded-sm'  type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
        <input  className='border-2 p-2 text-sm rounded-sm'  type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input  className='border-2 p-2 text-sm rounded-sm'  type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <button className='p-2 bg-emerald-600 text-white font-bold ' type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
