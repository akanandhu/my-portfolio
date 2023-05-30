import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Body from '../components/Body'

const IndexPage = () => (
  <div className="bg-[url('/images/background.jpg')] bg-cover w-full h-full">
  <Layout title="Portfolio Site | Ananthakrishnan" />
  <Header />
  <Body />
  {/* <Footer /> */}
  </div>
  
)

export default IndexPage
