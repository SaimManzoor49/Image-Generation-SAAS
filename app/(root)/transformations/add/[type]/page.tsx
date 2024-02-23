import Header from '@/components/shared/Header'
import React from 'react'

import {transformationTypes} from '@/constants'


const AddTransformationsTypePage = ({params:{type}}:SearchParamProps) => {
  return (
    <Header 
    title="Transformation Title"
    subTitle="Transformation SubTitle"
    />
  )
}

export default AddTransformationsTypePage