'use client'

import { CMSLink } from '@components/CMSLink'
import Image from 'next/image'
import React from 'react'
import { ThemeProvider, useTheme } from '@providers/Theme'
import { Gutter } from '@components/Gutter'
// import { Media } from '@components/Media'
import { RichText } from '@components/RichText'
import { Page } from '@root/payload-types'
import { HeaderObserver } from '../../HeaderObserver'

import classes from './index.module.scss'

export const HomeHero: React.FC<Page['hero']> = ({ richText, actions, sidebarContent }) => {
  const theme = useTheme()
  // const { height } = useWindowDimensions()

  return (
    <div className={classes.homeHero}>
      <ThemeProvider theme="dark" className={classes.wrap}>
        <HeaderObserver color="dark">
          <div className={classes.bg}>
            <div className={classes.bgImage}>
              <Image
                priority
                src="/images/background-gun.jpg"
                alt="Screenshots of CMW"
                fill
                // sizes="300vw" // aspect ratio of png, translates to 100vh 191
              />
            </div>
          </div>
          <div className={classes.contentWrap}>
            <Gutter>
              <div className={classes.content}>
                <RichText className={classes.richText} content={richText} />
                <div className={classes.sidebar}>
                  <RichText content={sidebarContent} className={classes.sidebarContent} />

                  {Array.isArray(actions) && (
                    <ul className={classes.actions}>
                      {actions.map(({ link }, i) => {
                        return (
                          <li key={i}>
                            <CMSLink {...link} appearance="default" fullWidth />
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </Gutter>
          </div>
        </HeaderObserver>
      </ThemeProvider>
      <HeaderObserver color={theme} />
    </div>
  )
}
