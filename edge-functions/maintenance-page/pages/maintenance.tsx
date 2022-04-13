import Head from 'next/head'
import { Layout, Text, Page, Button } from '@vercel/examples-ui'
import { useRouter } from 'next/router'

function Home() {
  const { reload } = useRouter()

  return (
    <Page className="flex flex-col gap-12">
      <Head>
        <title>Maintenance page - Vercel Example</title>
        <meta
          name="description"
          content="Vercel example how to implement a maintenance page on the edge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col gap-6">
        <Text variant="h1">Something went wrong 😓</Text>
        <Text>
          You can try to refresh the page to see if its fixed.
        </Text>
        <Button onClick={reload}>Refresh</Button>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
