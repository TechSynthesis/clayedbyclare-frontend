'use client'

import React from 'react'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { DefaultHero } from '@components/Hero/Default'
import { BlockSpacing } from '@components/BlockSpacing'
import { Gutter } from '@components/Gutter'
import { Media } from '@components/Media'
import { CMSLink } from '@components/CMSLink'
import classes from './index.module.scss'

const RenderProductsArchive: React.FC<{ posts: any }> = ({ posts }) => {
  // const RenderProductsArchive: React.FC<{ posts: Product[] }> = ({ posts }) => {
  return (
    <React.Fragment>
      <DefaultHero
        richText={[
          {
            type: 'h2',
            children: [
              {
                text: 'Products',
              },
            ],
          },
          {
            text: '',
          },
        ]}
      />
      <Gutter className={classes.gutter}>
        <BlockSpacing>
          <Grid className={classes.gridContainer}>
            {(posts || []).map((post, index) => {
              const isLastCell = index === posts.length - 1
              // const isOddNumberOfCells = posts.length % 2 !== 0
              // const shouldSpanFullWidth = isLastCell && isOddNumberOfCells
              const shouldSpanFullWidth = isLastCell
              const isEvenCell = index % 2 === 1

              return (
                <Cell
                  cols={shouldSpanFullWidth ? 6 : 6}
                  colsS={12}
                  colsM={12}
                  className={classes.product}
                  key={index}
                  // style={{
                  //   flexDirection: shouldSpanFullWidth ? 'row' : 'column',
                  //   minHeight: 'min-content',
                  // }}
                >
                  <div
                    className={classes.header}
                    // style={{
                    //   borderBottom: shouldSpanFullWidth && 'unset',
                    //   borderRight: '1px solid var(--theme-elevation-500)',
                    // }}
                  >
                    <h4>{post.title}</h4>
                    <CMSLink
                      url={`/products/${post.slug}`}
                      appearance="secondary"
                      fullWidth
                      label={`View ${post.title}`}
                    />
                  </div>
                  {typeof post.featuredImage !== 'string' && (
                    <Media
                      resource={post.featuredImage}
                      className={[classes.media, isEvenCell ? `${classes.even}` : '']
                        .filter(Boolean)
                        .join(' ')}
                    />
                  )}
                </Cell>
              )
            })}
          </Grid>
        </BlockSpacing>
      </Gutter>
    </React.Fragment>
  )
}

export default RenderProductsArchive
