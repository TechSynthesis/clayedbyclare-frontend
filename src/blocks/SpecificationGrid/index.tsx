import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React, { useState } from 'react'
import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { LineBlip } from '@components/LineBlip'
import classes from './index.module.scss'

export type SpecificationGridProps = Extract<Page['layout'][0], { blockType: 'specificationGrid' }>

// export const SpecificationGrid: React.FC<SpecificationGridProps> = props => {
export const SpecificationGrid = (props: any) => {
  const {
    specificationGridFields: { leadingHeader, specifications },
  } = props

  const hasSpecifications = Array.isArray(specifications) && specifications.length > 0
  const [isHovered, setIsHovered] = useState(null)

  return (
    <BlockSpacing className={classes.cardGrid}>
      <Gutter>
        <hr className={classes.hr} />
        {leadingHeader && (
          <Grid className={classes.intro}>
            <Cell cols={8} colsM={8}>
              <RichText className={classes.leadingHeader} content={leadingHeader} />
            </Cell>
          </Grid>
        )}
        <Grid cols={12}>
          {hasSpecifications &&
            specifications.map((spec, index) => (
              <Cell
                key={index}
                cols={4}
                colsL={4}
                colsM={4}
                colsS={10}
                className={classes.specifications}
                onMouseEnter={() => {
                  setIsHovered(index)
                }}
                onMouseLeave={() => {
                  setIsHovered(null)
                }}
              >
                <LineBlip blipGapSize="small" align="bottom" active={isHovered === index} />
                <h6 style={{ marginBottom: '8px', fontWeight: 'bolder' }}>{spec.name}</h6>
                <p>{spec.value}</p>
              </Cell>
            ))}
        </Grid>
      </Gutter>
    </BlockSpacing>
  )
}
