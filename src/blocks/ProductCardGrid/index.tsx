import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'
import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { CMSLink } from '@components/CMSLink'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper'
import { Media } from '@components/Media'
import classes from './index.module.scss'

export type ProductCardGridProps = Extract<Page['layout'][0], { blockType: 'productCardGrid' }>

export const ProductCardGrid: React.FC<ProductCardGridProps> = props => {
  const {
    productCardGridFields: { richText, cards, links },
  } = props

  const hasCards = Array.isArray(cards) && cards.length > 0
  const hasLinks = Array.isArray(links) && links.length > 0

  return (
    <BlockSpacing className={classes.cardGrid}>
      <div>
        <Gutter>
          <hr className={classes.hr} />
          {richText && (
            <Grid className={classes.intro}>
              <Cell cols={8} colsM={8}>
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
              <div className={classes.bg}>{/* <PixelBackground /> */}</div>
              <Grid>
                {cards.map((card, index) => {
                  const { title, price, productImageSlides } = card
                  return (
                    <Cell key={index} cols={4} colsL={4} colsM={4} colsS={4}>
                      <div className={classes.card}>
                        <Swiper
                          modules={[EffectCards, Navigation, Pagination, Scrollbar, A11y]}
                          spaceBetween={50}
                          slidesPerView={1}
                          scrollbar={{ draggable: true }}
                        >
                          {productImageSlides.map(
                            slide =>
                              slide.image &&
                              typeof slide.image !== 'string' && (
                                <SwiperSlide>
                                  {' '}
                                  <Media
                                    resource={slide.image}
                                    key={slide.id}
                                    // className={classes.media}
                                  />
                                </SwiperSlide>
                              ),
                          )}
                        </Swiper>
                        <div className={classes.cardInfo}>
                          <h3>{title}</h3>
                          <p>
                            <b>S${price}</b>
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
