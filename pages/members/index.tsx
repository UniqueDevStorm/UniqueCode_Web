import Header from '../../components/Header'
import Footer from '../../components/Footer'
import User from '../../components/User'

export default function Members() {
  return (
    <div>
      <Header />
      <User Name='스톰' Description='프론트엔드 & 백엔드 개발자' />
      <User Name='choshinyoung' Description='고야이' />
    </div>
  )
}
