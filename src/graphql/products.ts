import {
  CALL_TO_ACTION,
  CARD_GRID,
  CASE_STUDIES_HIGHLIGHT,
  CODE_FEATURE,
  CONTENT,
  CONTENT_GRID,
  FORM_BLOCK,
  HOVER_HIGHLIGHTS,
  LINK_GRID,
  MEDIA_BLOCK,
  MEDIA_CONTENT,
  REUSABLE_CONTENT_BLOCK,
  SLIDER,
  STEPS,
  STICKY_HIGHLIGHTS,
  CASE_STUDY_CARDS,
  ACCORDION,
  SPECIFICATION_GRID,
  PRODUCT_FEATURES,
  FEATURE_GRID,
  // BANNER,
} from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'
import { META_FIELDS } from './meta'

export const PRODUCTS = `
  query Products {
    Products(limit: 300) {
      docs {
        id
        title
        featuredImage ${MEDIA_FIELDS}
        createdAt
        slug
        breadcrumbs {
          url
          label
        }
      }
    }
  }
`
export const MAINCATEGORY = `
  query Products {
    Products(where: {parent: {equals: null}}, limit: 300, sort: "createdAt") {
      docs {
        id
        title
        featuredImage ${MEDIA_FIELDS}
        createdAt
        slug
        breadcrumbs {
          url
          label
        }
      }
    }
  }
`
export const PRODUCTS_BY_PARENT_ID = `
  query Products($parentId: String) {
    Products(where: {parent: {equals: $parentId }}, limit: 300) {
      docs {
        id
        title
        featuredImage ${MEDIA_FIELDS}
        createdAt
        slug
        breadcrumbs {
          url
          label
        }
        productOrCategory {
          type
          shortDescription
          thumbnailSlides {
            image ${MEDIA_FIELDS}
          }
          actions {
            link ${LINK_FIELDS({ disableAppearance: true })}
          }
        }
      }
    }
  }
`

export const PRODUCT = `
  query Product($slug: String ) {
    Products(where: { slug: { equals: $slug} }, draft: true) {
      docs {
        id
        title
        slug
        url
        featuredImage ${MEDIA_FIELDS}
        productOrCategory {
          type
          productSeries
          shortDescription
          longDescription
          thumbnailSlides {
            image ${MEDIA_FIELDS}
          }
          actions {
            link ${LINK_FIELDS({ disableAppearance: true })}
          }
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
          ${ACCORDION}
          ${SPECIFICATION_GRID}
          ${PRODUCT_FEATURES}
          ${FEATURE_GRID}

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
