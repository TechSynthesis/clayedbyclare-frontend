'use client'

import React from 'react'
// import React, { useEffect, useState } from 'react'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { DefaultHero } from '@components/Hero/Default'
import { BlockSpacing } from '@components/BlockSpacing'
import { CaseStudy } from '@root/payload-types'
import { ArchiveMediaCard } from '@components/cards/ArchiveMediaCard'
import { Gutter } from '@components/Gutter'
// import { fetchCaseStudies } from '@root/graphql'
// import Pagination from '@components/Pagination'

import classes from './index.module.scss'

export const RenderBlogArchive: React.FC<{ posts: CaseStudy[] }> = ({ posts }) => {
  // const [posts, setPosts] = useState(initialPosts)
  // const [currentPage, setCurrentPage] = useState(1)
  // const pageSize = 10

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const newPosts = await fetchCaseStudies(pageSize, (currentPage - 1) * pageSize)
  //     setPosts(newPosts)
  //   }

  //   if (currentPage > 1) {
  //     fetchPosts()
  //   }
  // }, [currentPage])

  return (
    <React.Fragment>
      <DefaultHero
        richText={[
          {
            type: 'h2',
            children: [
              {
                text: `Industry`,
              },
            ],
          },
          {
            text: '',
          },
        ]}
      />

      <Gutter>
        <BlockSpacing>
          <Grid>
            {(posts || []).map(post => {
              return (
                <Cell key={post.id} cols={4} colsM={4} colsS={8} className={classes.post}>
                  <ArchiveMediaCard
                    title={post.title}
                    description={post?.meta?.description}
                    href={`/industry/${post.slug}`}
                    media={post.featuredImage}
                  />
                </Cell>
              )
            })}
          </Grid>
          {/* <Pagination currentPage={currentPage} pageSize={pageSize} onPageChange={setCurrentPage} /> */}
        </BlockSpacing>
      </Gutter>
    </React.Fragment>
  )
}

export default RenderBlogArchive
