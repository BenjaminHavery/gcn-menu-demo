
import Link from 'next/link'
import Layout from '../../components/Layout'

import { presenters } from '../../data'


export default function Presenters() {
  return (
    <Layout title='Presenters'>
      <h1>Presenters</h1>
      <ul>
        {presenters.map(({ title, href }, key) => 
          <li {...{ key }}>
            <Link {...{ href }}><a>{ title }</a></Link>
          </li>
        )}
      </ul>
    </Layout>
  )
}
