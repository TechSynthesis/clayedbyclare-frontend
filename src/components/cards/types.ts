import type { CMSLinkType } from '@components/CMSLink'
import type { Media } from '@root/payload-types'

export interface SharedProps {
  title?: string
  description?: string
  className?: string
}

export interface SquareCardProps extends SharedProps {
  leader?: string
  link: CMSLinkType
  media?: Media | string
}

export interface BlogCardProps extends SharedProps {
  media: Media | string
  href: string
}

export interface FeatureGridProps extends SharedProps {
  leader?: string
  link: CMSLinkType
  iconImage?: Media | string
  keyValue?: number
}

// export interface ProductFeaturesProps extends SharedProps {
//   leader?: string
//   link: CMSLinkType
//   iconImage?: Media | string
//   key: number
// }
