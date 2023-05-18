import React from 'react'
import { SliderProvider, SliderTrack, Slide, DotsNav } from '@faceless-ui/slider'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { FeatureGridCenterCard } from '@components/cards/FeatureGridCenterCard'
import { PixelBackground } from '@components/PixelBackground'
import { FeatureGridLandscapeCard } from '@components/cards/FeatureGridLandscapeCard'
import classes from './index.module.scss'

export type ProductFeaturesProps = Extract<Page['layout'][0], { blockType: 'productFeatures' }>

export const ProductFeatures: React.FC<ProductFeaturesProps> = props => {
  const {
    productFeaturesFields: { cards, richText, withBackground, alignment },
  } = props

  const hasCards = Array.isArray(cards) && cards.length > 0
  return (
    <BlockSpacing className={classes.cardGrid}>
      <Gutter>
        <hr className={classes.hr} />
        {richText && (
          <Grid className={classes.intro}>
            <Cell cols={8} colsM={8}>
              <RichText className={classes.richText} content={richText} />
            </Cell>
          </Grid>
        )}
        <Grid>
          <div className={classes.mobileSlider}>
            {hasCards && (
              <Cell start={2} cols={10} colsM={6} colsS={8} className={classes.pixelCell}>
                <SliderProvider slidesToShow={1} autoPlay>
                  <SliderTrack className={classes.track}>
                    {cards.map((card, index) => {
                      const { title, description, link, cardIcon } = card
                      return (
                        <Slide key={index} index={index} className={classes.slide}>
                          <FeatureGridCenterCard
                            className={classes.card}
                            title={title}
                            description={description}
                            link={link}
                            iconImage={cardIcon}
                          />
                        </Slide>
                      )
                    })}
                  </SliderTrack>
                  <DotsNav
                    className={classes.dots}
                    dotClassName={classes.dot}
                    activeDotClassName={classes.dotIsActive}
                  />
                </SliderProvider>
              </Cell>
            )}
          </div>
        </Grid>
        {hasCards && alignment === 'verticalMediaTextCard' ? (
          <div className={[classes.cards, classes.desktopSlider].filter(Boolean).join(' ')}>
            <Gutter className={classes.pixelContainer}>
              <Grid>
                <Cell start={4} cols={9} className={classes.pixelCell}>
                  {withBackground && <PixelBackground />}
                </Cell>
              </Grid>
            </Gutter>

            <Grid>
              {cards.map((card, index) => {
                const { title, description, link, cardIcon } = card
                return (
                  <Cell cols={4} colsM={8} key={index}>
                    <FeatureGridCenterCard
                      className={classes.card}
                      title={title}
                      description={description}
                      link={link}
                      keyValue={index}
                      iconImage={cardIcon}
                    />
                  </Cell>
                )
              })}
            </Grid>
          </div>
        ) : (
          <div className={[classes.cards, classes.desktopSlider].filter(Boolean).join(' ')}>
            <Gutter className={classes.pixelContainer}>
              <Grid>
                <Cell start={4} cols={9} className={classes.pixelCell}>
                  {withBackground && <PixelBackground />}
                </Cell>
                <PixelBackground />
              </Grid>
            </Gutter>

            <Grid>
              {cards.map((card, index) => {
                const { title, description, link, cardIcon } = card
                return (
                  <Cell cols={4} colsM={5} key={index}>
                    <FeatureGridLandscapeCard
                      className={classes.card}
                      title={title}
                      description={description}
                      link={link}
                      keyValue={index}
                      iconImage={cardIcon}
                    />
                  </Cell>
                )
              })}
            </Grid>
          </div>
        )}
      </Gutter>
    </BlockSpacing>
  )
}
