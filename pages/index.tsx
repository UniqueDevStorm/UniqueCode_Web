import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectBox from '@components/ProjectsBox';
import StrawberryDonut from '@assets/img/projects/StrawberryDonut.png'
import ProjectBoxRoller from '../components/ProjectBoxRoller'
import OliveToast from '@assets/img/projects/OliveToast.png'
import MiniBOT from '@assets/img/projects/MiniBOT.png'
import FreeAI from '@assets/img/projects/FreeAI.png'
import BananaMilk from '@assets/img/projects/BananaMilk.png'
import Uniquebots from '@assets/img/projects/Uniquebots.png'
import { NextSeo } from "next-seo";

const Projects = [
  {
    name: "StrawberryDonut",
    description: "나만의 스토리를 만들다.",
    img: StrawberryDonut,
    url: 'https://sbdonut.dev/'
  },
  {
    name: "OliveToast",
    description: "서버를 관리해줍니다.",
    img: OliveToast,
    url: 'https://discord.com/oauth2/authorize?client_id=495209098929766400&permissions=8&scope=bot'
  },
  {
    name: 'MiniBOT',
    description: '커스텀 봇을 봇으로 제작하세요.',
    img: MiniBOT,
    url: 'https://discord.com/oauth2/authorize?client_id=520830713696878592&permissions=8&scope=bot'
  },
  {
    name: 'FreeAI',
    description: '다기능 챗봇.',
    img: FreeAI,
    url: 'https://discord.com/oauth2/authorize?client_id=695899835953578025&permissions=2084433143&scope=bot'
  },
  {
    name: 'BananaMilk',
    description: '모두 함께 이야기를 재미있게.',
    img: BananaMilk,
    url: 'https://discord.com/api/oauth2/authorize?client_id=805641034905944086&permissions=3525696&scope=bot'
  },
  {
    name: 'Uniquebots',
    description: '당신의 디스코드 봇을 홍보하세요.',
    img: Uniquebots,
    url: 'https://uniquebots.kr/'
  }
]

export default function Home() {
  return (
    <div>
      <meta name="naver-site-verification" content="1f859ccdf6c36ae473be981118542ba0021f8d96" />
      <NextSeo
        title='UniqueCode'
        description='UniqueCode WebSite.'
      />
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
        <ProjectBoxRoller>
          {Projects.map((x, y) => (
              <ProjectBox
                  img={x.img}
                  name={x.name}
                  description={x.description}
                  url={x.url}
                  key={y}
              />
          ))}
        </ProjectBoxRoller>
      </div>
    </div>
  )
}
