import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'
import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { CMSLink } from '@components/CMSLink'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/core'

import { Media } from '@components/Media'
import classes from './index.module.scss'

export type ProductCardGridProps = Extract<Page['layout'][0], { blockType: 'productCardGrid' }>

export const ProductCardGrid: React.FC<ProductCardGridProps> = props => {
  const {
    productCardGridFields: { richText, cards, links },
  } = props

  const hasCards = Array.isArray(cards) && cards.length > 0
  const hasLinks = Array.isArray(links) && links.length > 0

  // Add a ref to the container element that wraps the cells
  // const containerRef = useRef(null)
  // useEffect(() => {
  //   const observer = lozad('.card img', {
  //     // Customize threshold and other options if needed
  //   })

  //   observer.observe(containerRef.current)
  // }, [])

  return (
    <BlockSpacing className={classes.cardGrid}>
      <div>
        <Gutter>
          {richText && (
            <Grid className={classes.intro}>
              <Cell cols={12} colsM={12}>
                <RichText className={classes.richText} content={richText} />
              </Cell>
              {hasLinks && (
                <Cell cols={3} colsL={4} start={10} startL={9} startM={1} colsM={8}>
                  {links.map(({ link }, index) => {
                    return (
                      <CMSLink
                        {...link}
                        key={index}
                        appearance="default"
                        fullWidth
                        buttonProps={{
                          icon: 'arrow',
                        }}
                      />
                    )
                  })}
                </Cell>
              )}
            </Grid>
          )}
          {hasCards && (
            <div className={classes.cards}>
              <div className={classes.bg}></div>
              <Grid>
                {cards.map((card, index) => {
                  const { title, price, soldOut, productImageSlides } = card
                  const cols = cards.length === 2 ? 6 : 4
                  const smallCols = cards.length === 2 ? 8 : 4
                  return (
                    <Cell key={index} cols={cols} colsL={cols} colsM={4} colsS={smallCols}>
                      <div className={classes.card}>
                        <Splide
                          options={{
                            rewind: true,
                            lazyLoad: 'nearby',
                          }}
                          aria-label={`${title} slider`}
                        >
                          {productImageSlides &&
                            productImageSlides.map((image, index1) => {
                              if (typeof image === 'string') return null
                              return (
                                <SplideSlide key={index1}>
                                  {typeof image.image !== 'string' && (
                                    <Media
                                      resource={image.image}
                                      key={image.id}
                                      data-splade-lazy={image.image.url}
                                    />
                                  )}
                                </SplideSlide>
                              )
                            })}
                        </Splide>
                        <div className={classes.cardInfo}>
                          <h4>{title}</h4>
                          <p>
                            <b>
                              {soldOut ? (
                                <p className={classes.soldOut}>Sold Out</p>
                              ) : (
                                <p>
                                  <b>S${price}</b>
                                </p>
                              )}
                            </b>
                          </p>
                        </div>
                      </div>
                    </Cell>
                  )
                })}
              </Grid>
            </div>
          )}
        </Gutter>
      </div>
    </BlockSpacing>
  )
}
