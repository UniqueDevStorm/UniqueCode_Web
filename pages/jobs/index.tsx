import Jobs from "../../components/Jobs";

export default function Recruitment() {
    return (
        <div className='text-left'>
            <Jobs
                name='백엔드 개발자 모집'
                description='discord.py, discord.js 등 백엔드 라이브러리를 잘 다뤄야 해요.'
                status={true}
            />
            <Jobs
                name='프론트엔드 개발자 모집'
                description='React.js, Next.js 등 여러 라이브러리를 잘 다뤄야해요.'
                status={true}
            />
        </div>
    )
}