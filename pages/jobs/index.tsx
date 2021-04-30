import Jobs from "@components/Jobs";
import React from "react";
import { NextSeo } from "next-seo";
import data from '@assets/Recruitment.json';

export default function Recruitment() {
    return (
        <div className='text-left'>
            <NextSeo
                title='UniqueCode Jobs'
                description='UniqueCode Jobs.'
            />
            {data.map((x, i) => (
                <Jobs
                    name={x.name}
                    description={x.description}
                    status={x.status}
                    key={i}
                />
            ))}
        </div>
    )
}