import User from '../../components/User'
import {NextSeo} from "next-seo";
import STORM from '@assets/img/Users/STORM.png';
import HappytreeSamsung from '@assets/img/Users/HappyTree_Samsung.png';
import Lapis from '@assets/img/Users/Lapis.png';
import Minibox from '@assets/img/Users/Minibox.png';
import SaidbySolo from '@assets/img/Users/SaidBySolo.png';
import Hodugwaja from '@assets/img/Users/Hodugwaja.png';
import choshinyoung from '@assets/img/Users/choshinyoung.png';
import BGM from '@assets/img/Users/BGM.png';
import sandsunset from '@assets/img/Users/sandsunset.png';
import ReDesigned from '@assets/img/Users/ReDesigned.png';
import pikokr from '@assets/img/Users/pikokr.png';

const Member = [
    {
        name: "STORM",
        description: "대표 | 프론트엔드 & 백엔드 개발자",
        img: STORM,
        github: "UniqueDevStorm"
    },
    {
        name: "Happytree Samsung",
        description: "안녕하세요 삼성해피트리입니다!",
        img: HappytreeSamsung,
        github: "samsunghappytree123"
    },
    {
        name: "라피스",
        description: "Python!",
        img: Lapis,
        github: "Lapis0875"
    },
    {
        name: "Minibox",
        description: "안녕하세요 미니박스예요",
        img: Minibox,
        github: "minibox24"
    },
    {
        name: "SaidBySolo",
        description: "愛して 君を愛していたんだって君に伝えられなかったなあ",
        img: SaidbySolo,
        github: "SaidBySolo"
    },
    {
        name: "호두과자",
        description: "개발자 겸 영상편집자",
        img: Hodugwaja,
        github: "Hodugwaja"
    },
    {
        name: "choshinyoung",
        description: "대표 | 고야이",
        img: choshinyoung,
        github: "choshinyoung"
    },
    {
        name: 'BGM',
        description: '몰라',
        img: BGM,
        github: "khk4912"
    },
    {
        name: 'sandsunset',
        description: '취미로 코딩',
        img: sandsunset,
        github: "sandsunset"
    },
    {
        name: "ReDesigned",
        description: "mailto:aria@アリア.みんな",
        img: ReDesigned,
        github: "ReDesignedJP"
    },
    {
        name: "파랑이",
        description: "그냥 아주 평범한 사람",
        img: pikokr,
        github: "pikokr"
    }
]

export default function Members() {
    return (
        <div className='grid grid-flow-col grid-rows-11 sm:grid-rows-6 sm:grid-cols-2 sm:gap-20 justify-center'>
            <NextSeo
                title='UniqueCode Members'
                description='UniqueCode Members.'
            />
            {Member.map((x, y) => (
                <User
                    name={x.name}
                    description={x.description}
                    img={x.img}
                    github={x.github}
                    key={y}
                />
            ))}
        </div>
    )
}