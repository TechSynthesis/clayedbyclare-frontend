'use client'

import { Breadcrumbs } from '@components/Breadcrumbs'
import { Gutter } from '@components/Gutter'
import { HeaderObserver } from '@components/HeaderObserver'
import { useTheme } from '@providers/Theme'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'
import { ThumbnailSlider } from '@components/Hero/ThumbnailProductDetails/ThumbnailSlider'
import { CMSLink } from '@components/CMSLink'
import classes from './index.module.scss'

export const ThumbnailProductDetails = ({
  title,
  featuredImage,
  shortDescription,
  thumbnailSlides,
  productSeries,
  actions,
  breadcrumbs,
}: any) => {
  const theme = useTheme()

  return (
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
                  url: `/products${item.url}`,
                })),
              ]}
            />
          </Cell>
          {typeof featuredImage === 'object' && (
            <Cell cols={6} colsM={6} colsS={8}>
              <div className={classes.media}>
                <ThumbnailSlider thumbnailSlides={thumbnailSlides} featuredImage={featuredImage} />
              </div>
            </Cell>
          )}
          <Cell cols={5} start={8} colsM={8} startM={1}>
            <h1 style={{ display: 'flex', flexDirection: 'column' }}>
              <span className={classes.label}>{productSeries}</span>
              {title}
            </h1>
            <p>{shortDescription}</p>
            {Array.isArray(actions) && (
              <ul className={classes.actions}>
                {actions.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} appearance="default" fullWidth />
                    </li>
                  )
                })}
              </ul>
            )}
          </Cell>
        </Grid>
      </Gutter>
    </HeaderObserver>
  )
}
