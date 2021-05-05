
import Layout from '../components/Layout'
import Video from '../components/Video'
import { VcList } from '../components/VideoCard'

import { fetchVideos, videosByDay } from '../data'

import * as dayjs from 'dayjs'
dayjs().format()


export default function Home({ videos }) {
  console.log('render with', videos);
  const latest = videos[0],
        others = videos.filter(v => v._id !== latest._id);

  console.log(dayjs(latest.publishDate).format('DD/MM/YYYY'));

  return (
    <Layout>
      <Video video={ latest }/>
      <h2>Latest Videos</h2>
      { videosByDay(others).map((group, key) => (
        <div className='date-group'>
          <h3>{ group.dateString }</h3>
          <VcList videos={ group.videos }/>
        </div>
      ))}
    </Layout>
  )
}


export async function getStaticProps() {
  const videos = await fetchVideos();
  return { props: { videos }}
}
