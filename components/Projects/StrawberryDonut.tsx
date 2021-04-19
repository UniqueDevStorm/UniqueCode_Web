export default function StrawberryDonut() {
  return (
    <div className='p-60 mx-auto ml-96 flex sm:gap-10'>
      <img
        width={178}
        height={178}
        alt='StrawberryDonut'
        src='/Projects/StrawberryDonut.png'
        style={{ borderRadius: '55px', boxShadow: '10px 10px 30px #58585829' }}
      />
      <div className='block'>
        <h1 className='text-6xl font-thin'>StrawberryDonut</h1>
        <h2 className='text-2xl font-thin'>나만의 스토리를 만들다</h2>
        <div className='flex gap-4'>
          <button
            className='opacity-100 text-center text-white mt-5 transform hover:scale-110 motion-reduce:transform-none'
            style={{
              width: '116px',
              height: '42px',
              background: '#7187D4 0% 0% no-repeat padding-box',
              borderRadius: '21px',
              boxShadow: '5px 5px 20px #4B4B4B29',
            }}
          >
            <a
              className='mt-96'
              href='https://discord.com/oauth2/authorize?client_id=684736677960482826&permissions=11328&scope=bot'
            >
              초대하기
            </a>
          </button>
          <button
            className='opacity-100 text-center text-white mt-5 transform hover:scale-110 motion-reduce:transform-none'
            style={{
              width: '116px',
              height: '42px',
              background: '#2C2F33 0% 0% no-repeat padding-box',
              borderRadius: '21px',
              boxShadow: '5px 5px 20px #4B4B4B29',
            }}
          >
            <a className='mt-96' href='https://discord.gg/WWk5xG3ehQ'>
              서포트 서버
            </a>
          </button>
          <button
            className='opacity-100 text-center text-white mt-5 transform hover:scale-110 motion-reduce:transform-none'
            style={{
              width: '116px',
              height: '42px',
              background: '#FD8AA1 0% 0% no-repeat padding-box',
              borderRadius: '21px',
              boxShadow: '5px 5px 20px #4B4B4B29',
            }}
          >
            <a className='mt-96' href='https://sbdonut.dev'>
              공식 사이트
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
