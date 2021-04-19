export default function Uniquebots() {
  return (
    <div style={{ marginTop: '10rem', marginLeft: '39rem' }}>
      <img
        src='/Projects/Uniquebots.png'
        alt='Uniquebots'
        height={178}
        width={178}
        style={{ borderRadius: '55px', boxShadow: '10px 10px 30px #58585829' }}
      />
      <div
        className='block'
        style={{ marginLeft: '13.5rem', marginTop: '-11rem' }}
      >
        <h1 className='text-6xl font-thin'>Uniquebots</h1>
        <h2 className='text-2xl font-thin mt-1'>
          당신의 디스코드 봇을 홍보해보세요.
        </h2>
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
            <a className='mt-96' href='https://uniquebots.kr'>
              바로가기
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
            <a className='mt-96' href='https://discord.gg/NBdJdABkHG'>
              서포트 서버
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
