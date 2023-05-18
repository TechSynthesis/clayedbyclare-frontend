import { BlockSpacing } from '@components/BlockSpacing'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React, { useState } from 'react'

import { Page } from '@root/payload-types'
import { Gutter } from '@components/Gutter'
import { CMSLink } from '@components/CMSLink'
import classes from './index.module.scss'

export type LocationsGridProps = Extract<Page['layout'][0], { blockType: 'locationsGrid' }>

export const LocationsGrid: React.FC<LocationsGridProps> = props => {
  const {
    locationsGridFields: { richText, tabs, links },
  } = props
  const hasCards = Array.isArray(tabs) && tabs.length > 0
  const hasLinks = Array.isArray(links) && links.length > 0

  const [activeTab, setActiveTab] = useState(0)

  const [googleMap, setGoogleMap] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5843710701793!2d72.88328141578782!3d19.08200315674041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c888930926c9%3A0x3e8b562f300d3db7!2sCMW%20CO2%20TECHNOLOGY%20PVT%20LTD-%20HQ!5e0!3m2!1sen!2sin!4v1679987399368!5m2!1sen!2sin',
  )
  const handleTabClick = (index: number, defaultLocationGoogleUrl: string) => {
    setActiveTab(index)
    setGoogleMap(defaultLocationGoogleUrl)
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
            {hasCards && (
              <Cell cols={12} className={classes.tabs} style={{ marginTop: '-35px !important' }}>
                {tabs.map((tab, index) => {
                  const { tabTitle, defaultLocationGoogleUrl } = tab
                  const isActive = index === activeTab
                  return (
                    <div
                      className={[isActive && classes.buttonActive].filter(Boolean).join(' ')}
                      key={index}
                    >
                      <button onClick={() => handleTabClick(index, defaultLocationGoogleUrl)}>
                        {tabTitle}
                      </button>
                    </div>
                  )
                })}
              </Cell>
            )}
          </Grid>
        )}
        {hasCards && (
          <div className={classes.cards}>
            <Grid>
              <Cell cols={8} colsM={9} colsS={12}>
                <div className={classes.googleMapCode}>
                  <iframe
                    src={googleMap}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    aria-hidden={false}
                    tabIndex={0}
                  ></iframe>
                </div>
              </Cell>
              <Cell cols={4} start={9} colsL={4} colsM={4} colsS={10} startS={1}>
                <Grid>
                  <Cell style={{ height: '20px' }}>
                    <p>
                      <strong>Click on each location to view more details</strong>
                    </p>
                  </Cell>
                  {tabs.map((tab, index) => {
                    const { locations } = tab
                    const isActive1 = index === activeTab
                    return (
                      isActive1 &&
                      locations.map((location, indexOfLocation) => {
                        const { googleUrl, locationName, address } = location
                        return (
                          <Cell key={indexOfLocation}>
                            <button
                              onClick={() => setGoogleMap(googleUrl)}
                              className={classes.button}
                            >
                              <h6 style={{ fontWeight: 'bold' }}>{locationName}</h6>
                              <p>{address}</p>
                            </button>
                          </Cell>
                        )
                      })
                    )
                  })}
                </Grid>
              </Cell>
            </Grid>
          </div>
        )}
      </Gutter>
    </BlockSpacing>
  )
}
