import User from '../../components/User'

export default function Members() {
  return (
    <div className='grid grid-flow-col grid-rows-6 gap-20 justify-center'>
      <User Name='스톰' Description='대표 | 프론트엔드 & 백엔드 개발자' />
      <User Name='Happytree Samsung' Description='안녕하세요 삼성해피트리입니다!' />
      <User Name='라피스' Description='Python!' />
      <User Name='Minibox' Description='안녕하세요 미니박스예요' />
      <User Name='SaidBySolo' Description='愛して 君を愛していたんだって君に伝えられなかったなあ' />
      <User Name='호두과자' Description='개발자 겸 영상편집자' />
      <User Name='choshinyoung' Description='고야이' />
      <User Name='BGM' Description='몰라' />
      <User Name='sandsunset' Description='취미로 코딩' />
      <User Name='ReDesigned' Description='mailto:aria@アリア.みんな' />
      <User Name='파랑이' Description='그냥 아주 평범한 사람' />
    </div>
  )
}
