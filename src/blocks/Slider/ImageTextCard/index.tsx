import * as React from 'react'

import { Media } from '@components/Media'
import { Page } from '@root/payload-types'
import { RichText } from '@components/RichText'
import { CMSLink } from '@components/CMSLink'
import classes from './index.module.scss'

type Props = Extract<
  Page['layout'][0],
  { blockType: 'slider' }
>['sliderFields']['imageTextSlides'][0]

export const ImageTextCard: React.FC<Props> = ({ richText, image, link, description }) => {
  if (typeof image === 'string') return null

  return (
    <CMSLink {...link} className={classes.imageTextCard}>
      <Media fill resource={image} className={classes.imageTextCardImage} />
      <RichText className={classes.richText} content={richText} />
      <p className={classes.description}>{description}</p>
    </CMSLink>
  )
}
