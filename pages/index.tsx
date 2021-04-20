import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectBox from '../components/ProjectsBox'
import StrawberryDonut from '@assets/img/projects/StrawberryDonut.png'
// import OliveToast from '@assets/img/projects/OliveToast.png'
// import MiniBOT from '@assets/img/projects/MiniBOT.png'
// import FreeAI from '@assets/img/projects/FreeAI.png'
// import BananaMilk from '@assets/img/projects/BananaMilk.png'
// import Uniquebots from '@assets/img/projects/Uniquebots.png'

export default function Home() {
  return (
    <div>
      <div className='flex items-center justify-center gap-5'>
        <h1 className='text-2xl sm:text-7xl font-thin'>
          당신의 디스코드에
          <br />
          유니크한 재미를 더.
        </h1>
        <FontAwesomeIcon
          icon={['fab', 'discord']}
          color={'#7187D4'}
          className='text-6xl sm:text-9xl'
        />
      </div>
      <div className='flex justify-center mt-24'>
        <ProjectBox
          img={StrawberryDonut}
          name='StrawberryDonut'
          description='나만의 스토리를 만들다.'
        />
        {/*<ProjectBox*/}
        {/*    img={OliveToast}*/}
        {/*    name='OliveToast'*/}
        {/*    description='서버를 관리해줍니다.'*/}
        {/*/>*/}
        {/*<ProjectBox*/}
        {/*    img={MiniBOT}*/}
        {/*    name='MiniBOT'*/}
        {/*    description='커스텀 봇을 봇으로 제작하세요.'*/}
        {/*/>*/}
        {/*<ProjectBox*/}
        {/*    img={FreeAI}*/}
        {/*    name='FreeAI'*/}
        {/*    description='다기능 챗봇.'*/}
        {/*/>*/}
        {/*<ProjectBox*/}
        {/*    img={BananaMilk}*/}
        {/*    name='BananaMilk'*/}
        {/*    description='모두 함께 이야기를 재미있게.'*/}
        {/*/>*/}
        {/*<ProjectBox*/}
        {/*    img={Uniquebots}*/}
        {/*    name='Uniquebots'*/}
        {/*    description='당신의 디스코드 봇을 홍보하세요.'*/}
        {/*/>*/}
      </div>
    </div>
  )
}
