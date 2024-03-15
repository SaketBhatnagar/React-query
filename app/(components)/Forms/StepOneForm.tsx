"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
 firstName: string;
 lastName: string;
 parent1: string;
 parent2: string;
 phnumber: string;
 email:string;
 address:string;
};

// first name, last name, parent
// names, phone number, email, and address.
interface StepOneFormProps {
 onNext: (data: FormData) => void;
}

const StepOneForm: React.FC<StepOneFormProps> = ({ onNext }) => {
 const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

 const onSubmit = (data: FormData) => {
    onNext(data);
 };

 return (
  
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div className=''>
      <input className='border-2 p-1 text-base outline-none focus:border-b-slate-600 rounded-sm' {...register("firstName", { required: true })} placeholder="First Name" />
      {errors.firstName && <p className="error">First name is required</p>}
      </div>

      <div>
      <input className='border-2 p-1 text-base outline-none focus:border-b-slate-600 rounded-sm'{...register("lastName", { required: true })} placeholder="Last Name" />
      {errors.lastName && <p className="error">Last name is required</p>}
      </div>

      <div>
      <input className='border-2 p-1 text-base outline-none focus:border-b-slate-600 rounded-sm'{...register("parent1", { required: true })} placeholder="Parent Name 1" />
      {errors.parent1 && <p className="error">Parent Name is required</p>}
      </div>

      <div>
      <input className='border-2 p-1 text-base outline-none focus:border-b-slate-600 rounded-sm'{...register("parent2", { required: true })} placeholder="Parent Name 2" />
      {errors.parent2 && <p className="error">Parent name is required</p>}
      </div>

      <div>
      <input className='border-2 p-1 text-base outline-none focus:border-b-slate-600 rounded-sm' {...register("phnumber", { required: true, pattern: /^[0-9]+$/ })}  placeholder="Phone Number " />
      {errors.phnumber?.type === "required" && <p className="error">Phone Number is required</p>}
      {errors.phnumber?.type === "pattern" && <p className="error">Phone Number must contain only numbers</p>}
      </div>

      <div>
      <input className='border-2 p-1 text-base outline-none focus:border-b-slate-600 rounded-sm'{...register("email", { required: true })} placeholder="Email " />
      {errors.email && <p className="error">Email is required</p>}
      </div>

      <div>
      <input className='border-2 p-1 text-base outline-none focus:border-b-slate-600 rounded-sm'{...register("address", { required: true })} placeholder="Address " />
      {errors.address && <p className="error">Address is required</p>}
      </div>
      {/* Add other fields similarly */}

      <button type="submit" className='border-2 py-2 bg-emerald-400 text-white rounded-sm border-none'>Next Step -{">"}</button>
    </form>
  
 );
};

export default StepOneForm;
