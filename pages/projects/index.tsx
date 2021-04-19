import ProjectItem from '../../components/ProjectItem'
import StrawberryDonut from '@assets/img/projects/StrawberryDonut.png'
import OliveToast from '@assets/img/projects/OliveToast.png'

export default function Project() {
  return (
    <div className='justify-center flex'>
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
      </div>
    </div>
  )
}
