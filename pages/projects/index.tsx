import ProjectItem from '../../components/ProjectItem'
import StrawberryDonut from '@assets/img/projects/StrawberryDonut.png'
import OliveToast from '@assets/img/projects/OliveToast.png'
import MiniBOT from '@assets/img/projects/MiniBOT.png'
import FreeAI from '@assets/img/projects/FreeAI.png'
import BananaMilk from "@assets/img/projects/BananaMilk.png"
import Uniquebots from "@assets/img/projects/Uniquebots.png"
import CommingSoon from "@assets/img/projects/CommingSoon.png"
import {NextSeo} from "next-seo";

export default function Project() {
  return (
    <div className='justify-center flex'>
      <NextSeo
        title='UniqueCode Projects'
        description='UniqueCode Projects.'
      />
      <div className='flex flex-col gap-12'>
        <ProjectItem
          name='StrawberryDonut'
          img={StrawberryDonut}
          description='나만의 스토리를 만들다.'
          links={[
            {
              text: '초대하기',
              href:
                'https://discord.com/oauth2/authorize?client_id=684736677960482826&permissions=11328&scope=bot',
              color: '#7187D4',
              dark: true,
            },
            {
              text: '서포트 서버',
              href: 'https://discord.gg/WWk5xG3ehQ',
              color: '#000',
              dark: true,
            },
            {
              text: '공식 사이트',
              href: 'https://sbdonut.dev',
              color: '#FD8AA1',
              dark: true,
            },
          ]}
        />
        <ProjectItem
          name='OliveToast'
          img={OliveToast}
          description='서버를 관리해줍니다.'
          links={[
            {
              text: '초대하기',
              href:
                'https://discord.com/oauth2/authorize?client_id=495209098929766400&permissions=8&scope=bot',
              color: '#7187D4',
              dark: true,
            },
          ]}
        />
        <ProjectItem
          name='MiniBOT'
          img={MiniBOT}
          description='커스텀 봇을 봇으로 제작하세요.'
          links={[
            {
              text: '초대하기',
              href:
                'https://discord.com/oauth2/authorize?client_id=520830713696878592&permissions=8&scope=bot',
              color: '#7187D4',
              dark: true,
            },
            {
              text: '서포트 서버',
              href: 'https://discord.gg/pbd2xXJ',
              color: '#000',
              dark: true,
            },
          ]}
        />
        <ProjectItem
          name='FreeAI'
          img={FreeAI}
          description='다기능 챗봇'
          links={[
            {
              text: '초대하기',
              href:
                'https://discord.com/oauth2/authorize?client_id=695899835953578025&permissions=2084433143&scope=bot',
              color: '#7187D4',
              dark: true,
            },
          ]}
        />
        <ProjectItem
            name='BananaMilk'
            img={BananaMilk}
            description='모두 함께 이야기를 재미있게.'
            links={[
                {
                    text: '초대하기',
                    href:
                        'https://discord.com/api/oauth2/authorize?client_id=805641034905944086&permissions=3525696&scope=bot',
                    color: '#7187D4',
                    dark: true,
                },
                {
                    text: '서포트 서버',
                    href:
                        'https://discord.gg/7F96MbaJnz',
                    color: '#000',
                    dark: true
                }
            ]}
        />
        <ProjectItem
          name='Uniquebots'
          img={Uniquebots}
          description='당신의 디스코드 봇을 홍보해보세요.'
          links={[
              {
                  text: '바로가기',
                  href:
                      'https://uniquebots.kr',
                  color: 'gray',
                  dark: true,
              },
              {
                  text: '서포트 서버',
                  href:
                      'https://discord.gg/NBdJdABkHG',
                  color: '#000',
                  dark: true
              }
          ]}
        />
        <ProjectItem
          name='????'
          img={CommingSoon}
          description='Comming Soon.'
          links={[
              {
                  text: 'Comming Soon!',
                  href: '',
                  color: '#7187D4'
              }
          ]}
        />
      </div>
    </div>
  )
}
