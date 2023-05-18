'use client'

import React from 'react'
import { Product } from '@root/payload-types'
import { ThumbnailProductDetails } from '@components/Hero/ThumbnailProductDetails'

import { ProductCategorySlider } from '@components/Hero/ProductCategorySlider'
import { fetchProductsByParentId } from '@root/graphql'
import { HeaderObserver } from '@components/HeaderObserver'
import { Gutter } from '@components/Gutter'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { Breadcrumbs } from '@components/Breadcrumbs'
import { useTheme } from '@root/providers/Theme'
import { RenderBlocks } from '../../../components/RenderBlocks'

import classes from './index.module.scss'

export const RenderProduct: React.FC<Product> = props => {
  const { id, title, featuredImage, productOrCategory, layout, meta, breadcrumbs } = props
  const { thumbnailSlides, shortDescription, productSeries, actions, type } = productOrCategory
  const theme = useTheme()
  // Need this until Next #42414 is fixed
  React.useEffect(() => {
    document.title = meta?.title || title
  })
  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    async function fetchProducts() {
      if (type === 'category') {
        const products1 = await fetchProductsByParentId(id)
        setProducts(products1)
      }
    }
    fetchProducts()
  }, [id])

  if (type === 'category') {
    return (
      <>
        <HeaderObserver color={theme} pullUp>
          <Gutter>
            <Grid className={classes.grid}>
              <Cell>
                <Breadcrumbs
                  items={[
                    {
                      label: 'Products',
                      url: `/products`,
                    },
                    ...breadcrumbs.map(item => ({
                      label: item.label,
                      url: `/products/${item.url}`,
                    })),
                  ]}
                />
              </Cell>

              <Cell>
                <div>
                  <ProductCategorySlider products={products} productSeries={title} />
                </div>
              </Cell>
            </Grid>
          </Gutter>
        </HeaderObserver>
        {/* @ts-ignore */}
        <RenderBlocks blocks={layout} />
      </>
    )
  }

  return (
    <React.Fragment>
      {/* <UpdateTitle title={page.meta?.title || page.title} /> */}

      <ThumbnailProductDetails
        title={title}
        featuredImage={featuredImage}
        shortDescription={shortDescription}
        thumbnailSlides={thumbnailSlides}
        productSeries={productSeries}
        actions={actions}
        breadcrumbs={breadcrumbs}
      />
      {/* @ts-ignore */}
      <RenderBlocks blocks={layout} />
    </React.Fragment>
  )
}

export default RenderProduct
