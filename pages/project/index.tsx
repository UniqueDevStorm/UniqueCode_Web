import StrawberryDonut from '../../components/Projects/StrawberryDonut'
import OliveToast from '../../components/Projects/OliveToast'
import MiniBOT from '../../components/Projects/MiniBOT'
import FreeAI from '../../components/Projects/FreeAI'
import BananaMilk from '../../components/Projects/BananaMilk'
import Uniquebots from '../../components/Projects/Uniquebots'
import CommingSoon from '../../components/Projects/CommingSoon'

export default function Project() {
  return (
    <div className='justify-center flex'>
      <div className='flex flex-col gap-12'>
        <StrawberryDonut />
        <OliveToast />
        <MiniBOT />
        <FreeAI />
        <BananaMilk />
        <Uniquebots />
        <CommingSoon />
      </div>
    </div>
  )
}
