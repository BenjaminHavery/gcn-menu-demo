
import Layout from '../components/Layout'
import { VcList } from '../components/VideoCard'

import { fetchVideos, topics } from '../data'


export default function Topic({ topic, videos }) {
  return (
    <Layout title={topic.title}>
      <h1>{ topic.title }</h1>
      <p>Imagine that the below videos are filtered by their association to the topic "{ topic.title }".</p>
      <VcList {...{ videos }}/>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const topic = topics.filter(t => t.slug === context.params.topicSlug)[0],
        videos = await fetchVideos();
  return { props: { topic, videos }}
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: topics.map((topic) => { return { params: { topicSlug: topic.slug }}})
  }
}