import { notFound } from 'next/navigation'
import React from 'react'
import { fetchProduct, fetchProducts } from '../../../graphql'
import { RenderProduct } from './renderProduct'

const Product = async ({ params }) => {
  const { slug } = params
  const product = await fetchProduct(slug)

  if (!product) return notFound()

  return <RenderProduct {...product} />
}

export default Product

export async function generateStaticParams() {
  const products = await fetchProducts()

  // return products.map(({ breadcrumbs }) => ({
  //   slug: breadcrumbs?.[breadcrumbs.length - 1]?.url?.replace(/^\/|\/$/g, '').split('/'),
  // }))
  return products.map(({ slug }) => ({
    slug,
  }))
}
