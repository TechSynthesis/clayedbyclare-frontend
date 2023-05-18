import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React, { useState } from 'react'
import { ReusableContent } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { AccordionContent } from './AccordionContent'
import classes from './index.module.scss'

export type AccordionProps = Extract<ReusableContent['layout'][0], { blockType: 'accordion' }>

export const Accordion: React.FC<AccordionProps> = props => {
  const {
    accordionFields: { richText, tabs },
  } = props

  const hasCards = Array.isArray(tabs) && tabs.length > 0
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

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

        {hasCards && (
          <div>
            <Grid>
              <Cell cols={12} className={classes.tabs}>
                {tabs.map((tab, index) => {
                  const { tabTitle } = tab
                  const isActive = index === activeTab
                  return (
                    <div
                      className={[isActive && classes.buttonActive].filter(Boolean).join(' ')}
                      key={index}
                    >
                      <button onClick={() => handleTabClick(index)}>{tabTitle}</button>
                    </div>
                  )
                })}
              </Cell>
              <Cell cols={12} style={{ marginTop: '-35px !important' }}>
                {tabs.map((tab, index) => {
                  const { accordion } = tab
                  const isActive1 = index === activeTab
                  return (
                    isActive1 && (
                      <div key={index}>
                        <AccordionContent accordionRows={accordion} />
                      </div>
                    )
                  )
                })}
              </Cell>
            </Grid>
          </div>
        )}
      </Gutter>
    </BlockSpacing>
  )
}
