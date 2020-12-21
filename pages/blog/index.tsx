import Link from 'next/link'
import { Heading, Box, useThemeUI, Flex, Text } from 'theme-ui'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

import Page from '../../components/page'

const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID || '792ceab25629457cbf4843d45c867995'

export type Post = { id: string; slug: string; title: string; date: string; preview: string }

export const getAllPosts = async (): Promise<Post[]> => {
  return await fetch(`https://get.dhrvs.workers.dev//v1/table/${NOTION_BLOG_ID}`).then((res) =>
    res.json(),
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

function HomePage({ posts }: { posts: Post[] }) {
  const { theme } = useThemeUI()
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
      <NextSeo title="Home | Less" description="Less Blog" />
      <Page>
        <Box>
          {posts.map((post) => (
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={post.slug}>
              <a>
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
              </a>
            </Link>
          ))}
        </Box>
      </Page>
    </>
  )
}

export default HomePage
