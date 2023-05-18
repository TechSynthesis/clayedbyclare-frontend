import { BlockSpacing } from '@components/BlockSpacing'
import { PixelBackground } from '@components/PixelBackground'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React, { useState } from 'react'
import { SquareCard } from '@components/cards/SquareCard'
import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { CMSLink } from '@components/CMSLink'
import classes from './index.module.scss'

export type CardGridProps = Extract<Page['layout'][0], { blockType: 'cardGrid' }>

export const CardGrid: React.FC<CardGridProps> = props => {
  const {
    cardGridFields: { richText, cards, links },
  } = props

  const hasCards = Array.isArray(cards) && cards.length > 0
  const hasLinks = Array.isArray(links) && links.length > 0

  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = event => {
    setPosition({ x: event.clientX, y: event.clientY })
  }

  return (
    <BlockSpacing className={classes.cardGrid}>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
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
              <div className={classes.bg}>
                <PixelBackground />
              </div>
              <Grid>
                {cards.map((card, index) => {
                  const { title, description, link, media } = card
                  return (
                    <Cell
                      key={index}
                      cols={4}
                      colsL={4}
                      colsM={4}
                      colsS={10}
                      onMouseEnter={() => setIsHovering(false)}
                      onMouseLeave={() => setIsHovering(true)}
                    >
                      <SquareCard
                        leader={(index + 1).toString().padStart(2, '0')}
                        className={classes.card}
                        title={title}
                        description={description}
                        media={media}
                        link={link}
                      />
                    </Cell>
                  )
                })}
              </Grid>
            </div>
          )}
        </Gutter>
        {isHovering && (
          <img
            src="/images/hover-over-cards-cursor.png"
            alt="Cursor"
            style={{
              position: 'fixed',
              left: position.x + 10,
              top: position.y,
              zIndex: 1,
            }}
          />
        )}
      </div>
    </BlockSpacing>
  )
}
