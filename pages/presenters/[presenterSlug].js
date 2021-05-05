
import Layout from '../../components/Layout'
import { VcList } from '../../components/VideoCard'

import { fetchVideos, presenters } from '../../data'


export default function Presenter({ presenter, videos }) {
  return (
    <Layout title={presenter.title}>
      <h1>{ presenter.title }</h1>
      <p>[Profile of { presenter.title }]</p>
      <p>Imagine that the below videos all feature { presenter.title }.</p>
      <VcList {...{ videos }}/>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const presenter = presenters.filter(p => p.slug === context.params.presenterSlug)[0],
        videos = await fetchVideos();
  return { props: { presenter, videos }}
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: presenters.map((presenter) => { return { params: { presenterSlug: presenter.slug }}})
  }
}