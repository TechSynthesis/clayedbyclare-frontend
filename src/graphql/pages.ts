import {
  CALL_TO_ACTION,
  CARD_GRID,
  CASE_STUDIES_HIGHLIGHT,
  CASE_STUDY_CARDS,
  CODE_FEATURE,
  CONTENT,
  CONTENT_GRID,
  FEATURE_GRID,
  FORM_BLOCK,
  HOVER_HIGHLIGHTS,
  LINK_GRID,
  MEDIA_BLOCK,
  MEDIA_CONTENT,
  PRODUCT_FEATURES,
  REUSABLE_CONTENT_BLOCK,
  SLIDER,
  STEPS,
  STICKY_HIGHLIGHTS,
  ACCORDION,
  LOCATIONS_GRID,
  PRODUCT_CARD_GRID,
} from './blocks'
import { FORM_FIELDS } from './form'
import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'
import { META_FIELDS } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300) {
      docs {
        slug
        breadcrumbs {
          url
          label
        }
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String ) {
    Pages(where: { slug: { equals: $slug} }, draft: true) {
      docs {
        id
        title
        hero {
          type
          richText
          sidebarContent
          links {
            link ${LINK_FIELDS()}
          }
          actions {
            link ${LINK_FIELDS({ disableAppearance: true })}
          }
          buttons {
            link ${LINK_FIELDS()}
          }
          media ${MEDIA_FIELDS}
          centeredBrandText {
            line 
          }
          form ${FORM_FIELDS}
        }
        layout {
          ${CALL_TO_ACTION}
          ${CARD_GRID}
          ${CASE_STUDIES_HIGHLIGHT}
          ${CASE_STUDY_CARDS}
          ${CODE_FEATURE}
          ${CONTENT}
          ${CONTENT_GRID}
          ${FORM_BLOCK}
          ${HOVER_HIGHLIGHTS}
          ${LINK_GRID}
          ${MEDIA_BLOCK}
          ${MEDIA_CONTENT}
          ${REUSABLE_CONTENT_BLOCK}
          ${SLIDER}
          ${STEPS}
          ${STICKY_HIGHLIGHTS}
          ${FEATURE_GRID}
          ${PRODUCT_FEATURES}
          ${ACCORDION}
          ${LOCATIONS_GRID}
          ${PRODUCT_CARD_GRID}
        }
        meta ${META_FIELDS}
        breadcrumbs {
          url
          label
        }
      }
    }
  }
`
