import ProjectItem from '../../components/ProjectItem'
import StrawberryDonut from '@assets/img/projects/StrawberryDonut.png'

export default function Project() {
  return (
    <div className='justify-center flex'>
      <div className='flex flex-col gap-12'>
        <ProjectItem
          name='StrawberryDonut'
          img={StrawberryDonut}
          description='나만의 스토리를 만들다'
        />
      </div>
    </div>
  )
}
