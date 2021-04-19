export default function BananaMilk() {
  return (
    <div>
      <img
        alt='BananaMilk'
        src='/Projects/BananaMilk.png'
        height={178}
        width={178}
        style={{ borderRadius: '55px', boxShadow: '10px 10px 30px #58585829' }}
      />
      <div
        className='block'
        style={{ marginLeft: '13.5rem', marginTop: '-11rem' }}
      >
        <h1 className='text-6xl font-thin'>BananaMilk</h1>
        <h2 className='text-2xl font-thin'>모두 함께 이야기를 재미있게.</h2>
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
              href='https://discord.com/api/oauth2/authorize?client_id=805641034905944086&permissions=3525696&scope=bot'
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
            <a className='mt-96' href='https://discord.gg/7F96MbaJnz'>
              서포트 서버
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
