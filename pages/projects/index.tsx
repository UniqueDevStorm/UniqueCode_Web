import ProjectItem from '../../components/ProjectItem'
import StrawberryDonut from '@assets/img/projects/StrawberryDonut.png'

export default function Project() {
  return (
    <div className='justify-center flex'>
      <div className='flex flex-col gap-12'>
        <ProjectItem img={StrawberryDonut} />
      </div>
    </div>
  )
}
