import Header from '../../components/Header'
import StrawberryDonut from '../../components/Projects/StrawberryDonut'
import OliveToast from '../../components/Projects/OliveToast'
import MiniBOT from '../../components/Projects/MiniBOT'
import FreeAI from '../../components/Projects/FreeAI'
import BananaMilk from '../../components/Projects/BananaMilk'
import Uniquebots from '../../components/Projects/Uniquebots'
import CommingSoon from '../../components/Projects/CommingSoon'
import Footer from '../../components/Footer'

export default function Project() {
  return (
    <div>
      <Header />
      <StrawberryDonut />
      <OliveToast />
      <MiniBOT />
      <FreeAI />
      <BananaMilk />
      <Uniquebots />
      <CommingSoon />
      <div className='mt-40' />
      <Footer />
    </div>
  )
}
