import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleGroup,
  CollapsibleToggler,
} from '@faceless-ui/collapsibles'
import { RichText } from '@components/RichText'
import { ChevronIcon } from '@root/graphics/ChevronIcon'
// import { CMSLinkType } from '@components/CMSLink'

import classes from './index.module.scss'

// interface AccordionContentProps {
//   accordionRows: {
//     label: string
//     answer: {
//       [k: string]: unknown
//     }[]
//     enableLink?: boolean
//     link?: CMSLinkType
//     id?: string
//   }[]
// }

// export const AccordionContent: React.FC<AccordionContentProps> = ({ accordionRows }) => {
export const AccordionContent = ({ accordionRows }: any) => {
  return (
    <CollapsibleGroup transTime={250} transCurve="ease-in-out">
      {accordionRows.map((row, index) => {
        const { label, answer } = row
        return (
          <div key={index}>
            <Collapsible>
              {/* @ts-ignore */}
              {({ isOpen }) => {
                return (
                  <div>
                    <CollapsibleToggler className={classes.accordionToggler}>
                      {label}
                      <ChevronIcon className={classes.chevron} rotation={isOpen ? 270 : -270} />
                    </CollapsibleToggler>
                    <CollapsibleContent
                      className={[
                        classes.accordionContent,
                        isOpen && classes.accordionContentIsOpen,
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <RichText content={answer} />
                    </CollapsibleContent>
                  </div>
                )
              }}
            </Collapsible>
          </div>
        )
      })}
    </CollapsibleGroup>
  )
}
