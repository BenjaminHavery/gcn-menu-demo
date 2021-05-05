
import * as dayjs from 'dayjs'
dayjs().format()

export const videosByDay = (videos = []) => {
  const groupedVideos = [];

  videos.forEach(video => {
    const dateString = dayjs(video.publishDate).format('DD/MM/YYYY'),
          dateGroup = groupedVideos.filter(g => g.dateString === dateString)[0];
    
    if (!!dateGroup) dateGroup.videos.push(video);
    else groupedVideos.push({ dateString, videos: [video] });
  })

  return groupedVideos
}


export async function fetchVideos() {
  const response = await fetch('https://globalcyclingnetwork.com/api/devtask', {
    headers: {},
    referrerPolicy: 'no-referrer',
  });
  return response.json();
}


// Mock data for nav:
export const topics = [
  'GCN Show',
  'How To',
  'Maintenance',
  'Ask GCN',
  'Training',
  'Features',
  'Top 10s',
  'GCN Racing',
  'GCN Tech',
].map(t => { return {
  title: t,
  slug: t.replace(/\s+/g, '-').toLowerCase(),
}}).map(page => { return {
  ...page,
  href: `/${page.slug}`,
}});

export const presenters = [
  'Conor Dunne',
  'Daniel Lloyd',
  'James Lowsley-Williams',
  'Jon Cannings',
  'Manon Lloyd',
  'Oliver Bridgewood',
  'Simon Richardson',
  'Tom Last',
].map(p => { return {
  title: p,
  slug: p.replace(/\s+/g, '-').toLowerCase(),
}}).map(page => { return {
  ...page,
  href: `/presenters/${page.slug}`,
}});

export const mainNavItems = [
  { title: 'Home', slug: '', href: '/', children: [] },
  ...topics,
  { title: 'Presenters', slug: 'presenters', href: '/presenters', children: presenters },
]
