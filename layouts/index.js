import Header from 'components/Header'
import Footer from 'components/Footer'
import CookiesNotice from 'components/CookiesNotice'

const DefaultLayout = ({ settings, children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header settings={settings} />
      <main className='relative flex-grow'>{children}</main>
      <Footer settings={settings} />
      <CookiesNotice />
    </div>
  )
}

export default DefaultLayout
