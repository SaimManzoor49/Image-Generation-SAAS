import Header from '@/components/shared/Header'
import React from 'react'

import {transformationTypes} from '@/constants'
import TransformationForm from '@/components/shared/TransformationForm'
import { auth } from '@clerk/nextjs'
import { getUserById } from '@/lib/actions/user.action'
import { redirect } from 'next/navigation'


const AddTransformationsTypePage = async({params:{type}}:SearchParamProps) => {

  const {userId} = auth();

  if(!userId) redirect('sign-in')

  const user =await getUserById(userId)
  
  const transformation = transformationTypes[type]
  return (
    <>
    <Header 
    title={transformation.title}
    subTitle={transformation.subTitle}
    />
    <TransformationForm 
    action="Add"
    userId={user._id}
    type={transformation.type as TransformationTypeKey}
    creditBalance={user.creditBalance}
     />
    </>
  )
}

export default AddTransformationsTypePage