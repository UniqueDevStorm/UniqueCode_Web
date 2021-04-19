export default function OliveToast() {
  return (
    <div style={{ marginTop: '-8rem', marginLeft: '39rem' }}>
      <img
        alt='OliveToast'
        width={178}
        height={178}
        src='/Projects/OliveToast.png'
        style={{ borderRadius: '55px', boxShadow: '10px 10px 30px #58585829' }}
      />
      <div
        className='block'
        style={{ marginLeft: '13.5rem', marginTop: '-11rem' }}
      >
        <h1 className='text-6xl font-thin'>OliveToast</h1>
        <h2 className='text-2xl font-thin'>서버를 관리해줍니다.</h2>
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
              href='https://discord.com/oauth2/authorize?client_id=495209098929766400&permissions=8&scope=bot'
            >
              초대하기
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
