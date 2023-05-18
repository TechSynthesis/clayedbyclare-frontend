import Meta from '@components/Meta'
import { fetchProduct } from '@graphql'

export default async ({ params }) => {
  const { slug } = params
  const product = await fetchProduct(slug)

  if (product) {
    const { meta } = product
    return (
      <Meta
        title={meta?.title}
        description={meta?.description}
        image={meta?.image}
        slug={`products/${slug}`}
      />
    )
  }
  return null
}
