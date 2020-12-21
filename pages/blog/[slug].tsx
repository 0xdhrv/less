import { NotionRenderer, BlockMapType } from 'react-notion'
import { Heading, Container, useThemeUI, Text, Flex } from 'theme-ui'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

import { getAllPosts, Post } from './'
import Page from '../../components/page'

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const posts = await getAllPosts()
  const post = posts.find((t) => t.slug === slug)

  const blocks = await fetch(`https://get.dhrvs.workers.dev//v1/page/${post!.id}`).then((res) =>
    res.json(),
  )

  return {
    props: {
      blocks,
      post,
    },
    revalidate: 1,
  }
}

const BlogPost: React.FC<{ post: Post; blocks: BlockMapType }> = ({ post, blocks }) => {
  const { theme } = useThemeUI()
  if (!post) return null

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={theme.colors?.primary} />
      </Head>
      <Page>
        <NextSeo title={post.title} description={post.preview} />
        <Flex>
          <Heading p={2}>{post.title}</Heading>
          <Text sx={{ flex: '1 1 auto' }}></Text>
          <Text p={2} sx={{ verticalAlign: 'middle' }}>
            {post.date}
          </Text>
        </Flex>
        <Flex>
          <Text p={2} sx={{ verticalAlign: 'middle' }}>
            {post.preview}
          </Text>
        </Flex>
        <Container>
          <NotionRenderer blockMap={blocks} />
        </Container>
      </Page>
    </>
  )
}

export async function getStaticPaths() {
  const table = await getAllPosts()
  return {
    paths: table.map((row) => `/blog/${row.slug}`),
    fallback: true,
  }
}

export default BlogPost
