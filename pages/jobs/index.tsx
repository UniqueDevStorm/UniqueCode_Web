import Jobs from "../../components/Jobs";
import React from "react";
import {NextSeo} from "next-seo";

export default function Recruitment() {
    return (
        <div className='text-left'>
            <NextSeo
                title='UniqueCode Jobs'
                description='UniqueCode Jobs.'
            />
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
            <Jobs
                name='ㅋㅋ루'
                description='테스트임 ㅋㅋ루'
                status={false}
            />
        </div>
    )
}