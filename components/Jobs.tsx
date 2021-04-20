import React from 'react';
import Button from "./Button";

interface ProjectProps {
    name: string
    description: string
    status: boolean
}

const StatusTrue = () => {
    return (
        <div>
            <Button>
                신청하기
            </Button>
        </div>
    )
}

const StatusFalse = () => {
    return (
        <div className='select-none flex'>
            <Button color={'#000'}>
                ❌ 신청하기
            </Button>
        </div>
    )
}

const Jobs: React.FC<ProjectProps> = ({
    name,
    description,
    status
}) => {
    return (
        <div className='p-10'>
            <h1 className='font-thin text-3xl sm:text-6xl'>{name}</h1>
            <h2 className='font-thin text-2xl sm:text-4xl'>{description}</h2>
            {status ? <StatusTrue /> : <StatusFalse />}
        </div>
    )
}

export default Jobs;