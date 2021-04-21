import User from '../../components/User'
import {NextSeo} from "next-seo";
import STORM from '@assets/img/Users/STORM.png';
import HappytreeSamsung from '../../components/HappyTree_Samsung.png';
import Lapis from '@assets/img/Users/Lapis.png';
import Minibox from '@assets/img/Users/Minibox.png';
import SaidbySolo from '@assets/img/Users/SaidBySolo.png';
import Hodugwaja from '@assets/img/Users/Hodugwaja.png';
import choshinyoung from '@assets/img/Users/choshinyoung.png';
import BGM from '@assets/img/Users/BGM.png';
import sandsunset from '@assets/img/Users/sandsunset.png';
import ReDesigned from '@assets/img/Users/ReDesigned.png';
import pikokr from '@assets/img/Users/pikokr.png'

export default function Members() {
  return (
    <div className='grid grid-flow-col grid-rows-11 sm:grid-rows-6 sm:grid-cols-2 sm:gap-20 justify-center'>
      <NextSeo
        title='UniqueCode Members'
        description='UniqueCode Members.'
      />
      <User Name='스톰' Description='대표 | 프론트엔드 & 백엔드 개발자' img={STORM} />
      <User Name='Happytree Samsung' Description='안녕하세요 삼성해피트리입니다!' img={HappytreeSamsung} />
      <User Name='라피스' Description='Python!' img={Lapis} />
      <User Name='Minibox' Description='안녕하세요 미니박스예요' img={Minibox} />
      <User Name='SaidBySolo' Description='愛して 君を愛していたんだって君に伝えられなかったなあ' img={SaidbySolo} />
      <User Name='호두과자' Description='개발자 겸 영상편집자' img={Hodugwaja} />
      <User Name='choshinyoung' Description='대표 | 고야이' img={choshinyoung} />
      <User Name='BGM' Description='몰라' img={BGM} />
      <User Name='sandsunset' Description='취미로 코딩' img={sandsunset} />
      <User Name='ReDesigned' Description='mailto:aria@アリア.みんな' img={ReDesigned} />
      <User Name='파랑이' Description='그냥 아주 평범한 사람' img={pikokr} />
    </div>
  )
}