import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'
import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { CMSLink } from '@components/CMSLink'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
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
              <div className={classes.bg}>{/* <PixelBackground /> */}</div>
              <Grid>
                {cards.map((card, index) => {
                  const { title, price, productImageSlides } = card
                  const cols = cards.length === 2 ? 6 : 4
                  const smallCols = cards.length === 2 ? 8 : 4
                  return (
                    <Cell key={index} cols={cols} colsL={cols} colsM={4} colsS={smallCols}>
                      <div className={classes.card}>
                        <Swiper
                          modules={[EffectCards, Navigation, Pagination, Scrollbar, A11y]}
                          spaceBetween={50}
                          slidesPerView={1}
                          scrollbar={{ draggable: true }}
                          simulateTouch={true}
                          grabCursor={true}
                          loop={true}
                          // autoHeight={true}
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
                          <h4>{title}</h4>
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
