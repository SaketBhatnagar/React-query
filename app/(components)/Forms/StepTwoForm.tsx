"use client"
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

type FamilyMember = {
 name: string;
};

type FormData = {
 familyMembers: FamilyMember[];
};

interface StepTwoFormProps {
 onSubmit: (data: FormData) => void;
}

const StepTwoForm: React.FC<StepTwoFormProps> = ({ onSubmit }) => {
 const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>();
 const { fields, append, remove } = useFieldArray({
    control,
    name: "familyMembers"
 });

 return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-4'>
      {fields.map((field, index) => (
        <div key={field.id} className='flex flex-col gap-1' >
          <input className='border-2 p-2 rounded-sm' {...register(`familyMembers.${index}.name`, { required: true })} placeholder="Family Member Name" />
          {errors.familyMembers && errors.familyMembers[index] && <p className='error'>Name is required</p>}

          <button className='bg-red-500 p-2 text-xs  rounded-sm text-white' type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
      <div className='flex gap-4'>
      <button className='bg-sky-500 border-none rounded-sm p-2 text-white' type="button" onClick={() => append({ name: "" })}> Add Family Member</button>

      <button className='bg-emerald-500 p-2 rounded-sm text-white' type="submit">Submit</button>
      </div>
    </form>
 );
};

export default StepTwoForm;
