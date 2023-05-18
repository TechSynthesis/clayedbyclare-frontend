import type { CaseStudy, Footer, MainMenu, Page, Post, Product } from '../payload-types'
import { CASE_STUDIES, CASE_STUDY } from './case-studies'
import { GLOBALS } from './globals'
import { PAGE, PAGES } from './pages'
import { POST, POSTS, POST_SLUGS } from './posts'
import { MAINCATEGORY, PRODUCTS_BY_PARENT_ID, PRODUCT, PRODUCTS } from './products'

const next = {
  revalidate: 600,
}

export const fetchGlobals = async (): Promise<{ mainMenu: MainMenu; footer: Footer }> => {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?globals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: GLOBALS,
    }),
  }).then(res => res.json())

  return {
    mainMenu: data?.MainMenu,
    footer: data?.Footer,
  }
}

export const fetchPage = async (incomingSlugSegments?: string[]): Promise<Page | null> => {
  const slugSegments = incomingSlugSegments || ['home']
  const slug = slugSegments[slugSegments.length - 1]

  const { data, errors } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?page=${slug}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      next,
      body: JSON.stringify({
        query: PAGE,
        variables: {
          slug,
        },
      }),
    },
  ).then(res => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    throw new Error()
  }

  const pagePath = `/${slugSegments.join('/')}`

  const page = data.Pages?.docs.find(({ breadcrumbs }: Page) => {
    const { url } = breadcrumbs[breadcrumbs.length - 1]
    return url === pagePath
  })

  if (page) {
    return page
  }

  return null
}

export const fetchPages = async (): Promise<
  Array<{ breadcrumbs: Page['breadcrumbs']; slug: string }>
> => {
  const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?pages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: PAGES,
    }),
  }).then(res => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    throw new Error()
  }

  return data.Pages.docs
}

export const fetchPosts = async (): Promise<Array<{ slug: string }>> => {
  const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: POST_SLUGS,
    }),
  }).then(res => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    throw new Error()
  }

  return data?.Posts?.docs
}

export const fetchBlogPosts = async (): Promise<Post[]> => {
  const currentDate = new Date()
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?blogPosts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: POSTS,
      variables: {
        publishedOn: currentDate,
      },
    }),
  }).then(res => res.json())

  return data?.Posts?.docs
}

export const fetchBlogPost = async (slug: string): Promise<Post> => {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?blogPost=${slug}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: POST,
      variables: {
        slug,
      },
    }),
  }).then(res => res.json())

  return data?.Posts?.docs[0]
}

export const fetchCaseStudies = async (): Promise<CaseStudy[]> => {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?caseStudies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: CASE_STUDIES,
    }),
  }).then(res => res.json())

  return data?.CaseStudies?.docs
}
// export const fetchCaseStudies = async (limit, offset): Promise<CaseStudy[]> => {
//   const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?caseStudies`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     next,
//     body: JSON.stringify({
//       query: CASE_STUDIES,
//       variables: { limit, offset },
//     }),
//   }).then(res => res.json())

//   return data?.CaseStudies?.docs
// }

export const fetchCaseStudy = async (slug: string): Promise<CaseStudy> => {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?caseStudy=${slug}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: CASE_STUDY,
      variables: {
        slug,
      },
    }),
  }).then(res => res.json())

  return data?.CaseStudies?.docs[0]
}

// Products

// export const fetchProducts = async (): Promise<Product[]> => {
//   const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?products`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     next,
//     body: JSON.stringify({
//       query: PRODUCTS,
//     }),
//   }).then(res => res.json())

//   return data?.Products?.docs
// }

export const fetchProducts = async (): Promise<
  Array<{ breadcrumbs: Product['breadcrumbs']; slug: string }>
> => {
  const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: PRODUCTS,
    }),
  }).then(res => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    throw new Error()
  }

  return data.Products.docs
}

export const fetchProductVerticals = async (): Promise<
  Array<{ breadcrumbs: Product['breadcrumbs']; slug: string; parent: Product['parent'] }>
> => {
  const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: MAINCATEGORY,
    }),
  }).then(res => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    throw new Error()
  }

  return data.Products.docs
}
export const fetchProductsByParentId = async (parentId: string): Promise<Product[]> => {
  const { data, errors } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: PRODUCTS_BY_PARENT_ID,
      variables: {
        parentId,
      },
    }),
  }).then(res => res.json())

  if (errors) {
    console.error(JSON.stringify(errors))
    throw new Error()
  }

  return data.Products.docs
}

// export const fetchProduct = async (incomingSlugSegments?: string[]): Promise<Product | null> => {
//   const slugSegments = incomingSlugSegments || ['products']
//   const slug = slugSegments[slugSegments.length - 1]

//   const { data, errors } = await fetch(
//     `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?product=${slug}`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       next,
//       body: JSON.stringify({
//         query: PRODUCT,
//         variables: {
//           slug,
//         },
//       }),
//     },
//   ).then(res => res.json())

//   if (errors) {
//     console.error(JSON.stringify(errors))
//     throw new Error()
//   }

//   const productPath = `/${slugSegments.join('/')}`

//   const product = data.Products?.docs.find(({ breadcrumbs }: Product) => {
//     const { url } = breadcrumbs[breadcrumbs.length - 1]
//     return url === productPath
//   })

//   if (product) {
//     return product
//   }

//   return null
// }

export const fetchProduct = async (slug: string): Promise<Product> => {
  const { data } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?product=${slug}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next,
    body: JSON.stringify({
      query: PRODUCT,
      variables: {
        slug,
      },
    }),
  }).then(res => res.json())

  return data?.Products?.docs[0]
}
