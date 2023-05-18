import { notFound } from 'next/navigation'
import React from 'react'
import { fetchCaseStudies, fetchCaseStudy } from '../../../graphql'
import { RenderCaseStudy } from './renderCaseStudy'

const CaseStudy = async ({ params }) => {
  const { slug } = params
  const caseStudy = await fetchCaseStudy(slug)

  if (!caseStudy) return notFound()

  return <RenderCaseStudy {...caseStudy} />
}

export default CaseStudy

export async function generateStaticParams() {
  const caseStudies = await fetchCaseStudies()

  return caseStudies.map(({ slug }) => ({
    slug,
  }))
}
// export async function generateStaticParams() {
//   const caseStudies = await fetchCaseStudies()

//   return caseStudies.map(({ slug }) => ({
//     // eslint-disable-next-line no-unneeded-ternary
//     slug: slug ? slug : '',
//   }))
// }

// export async function generateStaticParams() {
//   const caseStudies = await fetchCaseStudies()

//   return caseStudies
//     .filter(({ slug }) => slug !== null) // only include items with non-null slug property
//     .map(({ slug }) => ({
//       slug,
//     }))
// }
