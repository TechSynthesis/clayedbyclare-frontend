import { FORM_FIELDS } from './form'
import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'

export const ACCORDION = `
...on Accordion {
  blockType
  accordionFields {
    richText
    tabs {
      tabTitle
      accordion{
        label
        answer
        enableLink
        link ${LINK_FIELDS({ disableAppearance: true, disableLabel: true })}
      }
    }
  }
}
`

export const BANNER = `
...on Banner {
  blockType
  bannerFields {
    type
    addCheckmark
    content
  }
}
`
export const BLOG_CONTENT = `
...on BlogContent {
  blockType
  blogContentFields {
    richText
  }
}
`

export const BLOG_MARKDOWN = `
...on BlogMarkdown {
  blockType
  blogMarkdownFields {
    markdown
  }
}
`

export const CODE_BLOCK = `
...on Code {
  blockType
  codeFields {
    language
    code
  }
}
`

export const CODE_FEATURE = `
...on CodeFeature {
  blockType
  codeFeatureFields {
    disableBlockSpacing
    heading
    richText
    enableLink
    link ${LINK_FIELDS()}
    language
    label
    code
  }
}
`

export const CALL_TO_ACTION = `
...on Cta {
  blockType
  ctaFields {
    richText
    feature
    links {
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
  }
}
`
export const CARD_GRID = `
...on CardGrid {
  blockType
  cardGridFields {
    richText
    links {
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
    cards {
      title
      description
      media ${MEDIA_FIELDS}
      enableLink
      link ${LINK_FIELDS({ disableAppearance: true, disableLabel: true })}
    }
  }
}
`

export const PRODUCT_CARD_GRID = `
...on ProductCardGrid {
  blockType
  productCardGridFields {
    richText
    links {
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
    cards {
      title
      price
      soldOut
      productImageSlides{
        image ${MEDIA_FIELDS}
      }
      enableLink
      link ${LINK_FIELDS({ disableAppearance: true, disableLabel: true })}
    }
  }
}
`

export const FEATURE_GRID = `
...on FeatureGrid {
  blockType
  featureGridFields {
    richText
    links {
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
    cards {
      title
      description
      enableLink
      link ${LINK_FIELDS({ disableLabel: true })}
      cardIcon ${MEDIA_FIELDS}
    }
    productPhoto ${MEDIA_FIELDS}
  }
}
`

export const PRODUCT_FEATURES = `
...on ProductFeatures {
  blockType
  productFeaturesFields {
    richText
    withBackground
    alignment
    links {
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
    cards {
      title
      description
      enableLink
      link ${LINK_FIELDS({ disableAppearance: true, disableLabel: true })}
      cardIcon ${MEDIA_FIELDS}
    }
  }
}
`

export const CASE_STUDIES_HIGHLIGHT = `
...on CaseStudiesHighlight {
  blockType
  caseStudiesHighlightFields {
    richText
    caseStudies {
      slug
      featuredImage {
        alt
        url
      }
    }
  }
}
`

export const CASE_STUDY_CARDS = `
...on CaseStudyCards {
  blockType
  caseStudyCardFields {
    cards {
      richText
      caseStudy {
        slug
        featuredImage ${MEDIA_FIELDS}
      }
    }
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  contentFields {
    useLeadingHeader
    leadingHeader
    layout
    columnOne
    columnTwo
    columnThree
  }
}
`

export const CONTENT_GRID = `
...on ContentGrid {
  blockType
  contentGridFields {
    forceDarkBackground
    useLeadingHeader
    leadingHeader
    cellGridSize
    cells {
      content
    }
  }
}
`

export const FORM_BLOCK = `
...on FormBlock {
  blockType
  formFields {
    container
    richText
    form ${FORM_FIELDS}
  }
}
`

export const HOVER_HIGHLIGHTS = `
...on HoverHighlights {
  blockType
  hoverHighlightsFields {
    richText
    addRowNumbers
    highlights {
      title
      description
      media ${MEDIA_FIELDS}
      enableLink
      link ${LINK_FIELDS({ disableAppearance: true, disableLabel: true })}
    }
  }
}
`

export const LINK_GRID = `
...on LinkGrid {
  blockType
  linkGridFields {
    links {
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  mediaBlockFields {
    position
    media ${MEDIA_FIELDS}
    caption
  }
}
`

export const MEDIA_CONTENT = `
...on MediaContent {
  blockType
  mediaContentFields {
    alignment
    container
    richText
    enableLink
    link ${LINK_FIELDS({ disableAppearance: true })}
    media ${MEDIA_FIELDS}
  }
}
`

export const SLIDER = `
...on Slider {
  blockType
  sliderFields {
    useLeadingHeader
    leadingHeader
    sliderType
    imageSlides {
      image ${MEDIA_FIELDS}
    }
    quoteSlides {
      richText
      quoteType
      quoteDate
      fullName
    }
    imageTextSlides {
      image ${MEDIA_FIELDS}
      richText
      description
      link ${LINK_FIELDS({ disableAppearance: true, disableLabel: true })}
    }
    imageCompareSlides {
      sliderOrientation
      beforeImage ${MEDIA_FIELDS}
      afterImage ${MEDIA_FIELDS}
    }
  }
}`

export const SPECIFICATION_GRID = `
...on SpecificationGrid {
  blockType
  specificationGridFields {
    leadingHeader
    specifications {
      name
      value
    }
  }
}
`

export const STICKY_HIGHLIGHTS = `
...on StickyHighlights {
  blockType
  stickyHighlightsFields {
    highlights {
      richText
      enableLink
      link ${LINK_FIELDS({ disableAppearance: true })}
      type
      code
      media ${MEDIA_FIELDS}
    }
  }
}
`
// test
// export const STICKY_CONTENT = `
// ... on StickyContent {
//   sections {
//     label
//     description
//     id
//   }
//   id
//   blockName
//   blockType
// }
// `
// export const STICKY_CONTENT = `
// ...on StickyContent {
//   blockType
//   sections{
//   StickyContent_Sections {
//     title
//     description
//   }
// }
// }`
// end test
export const STEPS = `
...on Steps {
  blockType
  stepsFields {
    steps {
      layout {
        ${CODE_FEATURE}
        ${CONTENT}
        ${HOVER_HIGHLIGHTS}
        ${STICKY_HIGHLIGHTS}
      }
    }
  }
}
`

export const LOCATIONS_GRID = `
...on LocationsGrid {
  blockType
  locationsGridFields {
    richText
    links {
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
    tabs{
      tabTitle
      defaultLocationGoogleUrl
      locations {
        locationName
        address
        googleUrl
      }
    }
  }
}
`

export const REUSABLE_CONTENT_BLOCK = `
...on ReusableContentBlock {
  blockType
  reusableContentBlockFields {
    reusableContent {
      layout {
        ${BANNER}
        ${BLOG_CONTENT}
        ${BLOG_MARKDOWN}
        ${CALL_TO_ACTION}
        ${CARD_GRID}
        ${CASE_STUDIES_HIGHLIGHT}
        ${CASE_STUDY_CARDS}
        ${CODE_BLOCK}
        ${CODE_FEATURE}
        ${CONTENT}
        ${CONTENT_GRID}
        ${FORM_BLOCK}
        ${HOVER_HIGHLIGHTS}
        ${LINK_GRID}
        ${MEDIA_BLOCK}
        ${MEDIA_CONTENT}
        ${SLIDER}
        ${STEPS}
        ${STICKY_HIGHLIGHTS}
        ${ACCORDION}
        ${LOCATIONS_GRID}
      }
    }
  }
}`
