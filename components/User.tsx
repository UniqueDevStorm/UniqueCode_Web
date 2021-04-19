export default function User({ Name, Description }) {
  return (
    <div className='flex'>
      <img
        src={`/Users/${Name}.png`}
        style={{ borderRadius: '50px', boxShadow: '10px 10px 30px #74747429' }}
        height={170}
        width={170}
      />
      <div className='block font-thin mt-10 ml-10'>
        <h1 className='text-4xl'>{Name}</h1>
        <h2 className='text-2xl'>{Description}</h2>
      </div>
    </div>
  )
}
