
import Layout from '../../components/Layout'
import { VcList } from '../../components/VideoCard'
import Video from '../../components/Video'

import { fetchVideos } from '../../data'


export default function video({ video, videos }) {
  return (
    <Layout title={video.title}>
      <Video {...{ video }}/>
      <p>{ video.title }</p>
      <h2>Other videos</h2>
      <VcList videos={ videos.filter(v => v._id !== video._id) }/>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const videos = await fetchVideos(),
        video = videos.filter(v => v.urlTitle === context.params.urlTitle)[0];  
  return { props: { video, videos }}
}

export async function getStaticPaths() {
  const videos = await fetchVideos();
  return {
    fallback: false,
    paths: videos.map((video) => { return { params: { urlTitle: video.urlTitle }}})
  }
}