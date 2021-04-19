import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <div className='bg-gray-100'>
      <div
        className='container mx-auto h-44 w-full flex justify-between flex-col lg:flex-row'
        style={{
          alignItems: 'center',
        }}
      >
        <div>
          <img
            src='/UniqueCode.png'
            height={52}
            width={52}
            className='inline-block'
          />
          <h1 className='font-thin text-xl inline-block'>UniqueCode</h1>
        </div>
        <div className='text-center font-thin text-xl'>
          <h1>
            2021 &copy; UniqueCode All Right Reserved.
            <br />
            대표 : 송찬우 | 사업자등록번호 : 799-60-00477
          </h1>
        </div>
        <div>
          <a href='https://discord.gg/ARCdUzC'>
            <FontAwesomeIcon
              icon={['fab', 'discord']}
              className='text-5xl'
              color='#000000'
            />
          </a>
          <a href='https://github.com/UniqueCodeGit' className='ml-5'>
            <FontAwesomeIcon
              icon={['fab', 'github']}
              className='text-5xl'
              color='#000000'
            />
          </a>
        </div>
      </div>
    </div>
  )
}
