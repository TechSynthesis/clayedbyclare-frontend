'use client'

import { Cell, Grid } from '@faceless-ui/css-grid'
import { CMSLink } from '@components/CMSLink'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { isMobile } from 'react-device-detect'
import classes from './index.module.scss'
import { CategorySlider } from './CategorySlider'

export const ProductCategorySlider = ({ products, productSeries }: any) => {
  return (
    <div>
      <ParallaxProvider>
        {products &&
          products.map((product, index) => {
            return (
              <Grid
                colSpan={12}
                key={index}
                className={classes.grid}
                style={{ height: '100vh', marginTop: '6rem' }}
              >
                {typeof product.featuredImage === 'object' && (
                  <Cell cols={6} colsM={6} colsS={9}>
                    <Parallax translateY={[55, -50]} disabled={isMobile}>
                      <div>
                        <div className={classes.media}>
                          <CategorySlider featuredImage={product.featuredImage} />
                        </div>
                        <div className={classes.spacer} />
                      </div>
                    </Parallax>
                  </Cell>
                )}
                <Cell cols={5} start={8} colsM={8} startM={1}>
                  <Parallax translateY={[-20, 30]} disabled={isMobile}>
                    <div>
                      {' '}
                      <h1 style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className={classes.label}>{productSeries}</span>
                        <CMSLink
                          className={classes.productHeading}
                          url={`/products/${product.slug}`}
                        >
                          {product.title}{' '}
                        </CMSLink>
                      </h1>
                      <p>{product.productOrCategory.shortDescription}</p>
                      <ul className={classes.actions}>
                        <li>
                          <CMSLink
                            url={`/products/${product.slug}`}
                            label={`Take a look at ${product.title}`}
                            appearance="default"
                            fullWidth
                          />
                        </li>
                      </ul>
                      {Array.isArray(product.productOrCategory.actions) && (
                        <ul className={classes.actions}>
                          {product.productOrCategory.actions.map(({ link }, i) => {
                            return (
                              <li key={i}>
                                <CMSLink {...link} appearance="default" fullWidth />
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                  </Parallax>
                </Cell>
              </Grid>
            )
          })}
      </ParallaxProvider>
    </div>
  )
}
