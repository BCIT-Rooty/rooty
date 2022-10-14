import '../styles/globals.css'
import NavBar from '../components/navbar/navbar'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  console.log(router)
  return (
    <>
      <NavBar 
      route={router.route}
      ></NavBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
