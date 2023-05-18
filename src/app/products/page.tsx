import React from 'react'
import { fetchProductVerticals } from '../../graphql'
import RenderProductsArchive from './RenderProductsArchive'

const Page = async () => {
  const products = await fetchProductVerticals()
  return <RenderProductsArchive posts={products} />
}

export default Page
