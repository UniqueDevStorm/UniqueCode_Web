export default function CommingSoon() {
  return (
    <div>
      <img
        alt='Comming Soon!'
        src='/Projects/CommingSoon.png'
        style={{ borderRadius: '55px', boxShadow: '10px 10px 30px #58585829' }}
      />
      <div
        className='block'
        style={{ marginLeft: '13.5rem', marginTop: '-11rem' }}
      >
        <h1 className='text-6xl font-thin'>????</h1>
        <h2 className='text-2xl font-thin'>Comming Soon...</h2>
        <div className='flex gap-4'>
          <button
            className='opacity-100 text-center text-white mt-5 transform hover:scale-110 motion-reduce:transform-none'
            style={{
              width: '116px',
              height: '50px',
              background: '#7187D4 0% 0% no-repeat padding-box',
              borderRadius: '21px',
              boxShadow: '5px 5px 20px #4B4B4B29',
            }}
          >
            <a className='mt-96'>Comming Soon!</a>
          </button>
        </div>
      </div>
    </div>
  )
}
