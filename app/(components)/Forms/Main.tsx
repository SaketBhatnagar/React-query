"use client"
import React, { useState } from 'react';
import StepOneForm from '@/app/(components)/Forms/StepOneForm';
import StepTwoForm from '@/app/(components)/Forms/StepTwoForm';



   
type FormData = {
    firstName: string;
    lastName: string;
    parent1: string;
    parent2: string;
    phnumber: string;
    email:string;
    address:string;
    // familyMembers:string[]
    // Add other fields as needed
   };
   
   type FamilyMember = {
    name: string;
   };
   
   type FormData2 = {
    familyMembers: FamilyMember[];
   };


const Main: React.FC = () => {
 const [step, setStep] = useState(1);
 const [formData, setFormData] = useState<FormData>();
 const [formData2, setFormData2] = useState<FormData2>();

 const nextStep = (data: FormData) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
 };

 const submitForm = (data: FormData2) => {
    setFormData2(data);
    setStep(step + 1);
 };

 return (
    <section className='flex justify-center items-center  h-screen overflow-hidden'>
        <article className=' p-8  shadow-lg'>
      {step === 1 && <StepOneForm onNext={nextStep} />}
      {step === 2 && <StepTwoForm onSubmit={submitForm} />}
      {step === 3 && <div>Form Submiited Successfully!</div>}
      </article>
      </section>
 );
};

export default Main;
