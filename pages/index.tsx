import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
      <p className='bg-red-500 font-bold '>Hello</p>
      <div className='bg-red-600'>
        Hello
      </div>
  </Layout>
)

export default IndexPage
