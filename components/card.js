import {SiLinkedin} from "react-icons/si"
export default function Card({
    name,
    linkedin,
    description,
    website,
    pfp
}) {
    return (
        <div className="bg-white px-4 py-2 rounded-md">
            <div>
                <img src={`/${pfp}`} className="rounded-full w-16 h-16" />
            </div>
            <div className="text-lg font-semibold">
                {name}
            </div>
            <div className="">
                {description}        
            </div>
            <div className="text-gray-600 hover:text-gray-700 mt-2">
            <a href={`https://www.linkedin.com/in/${linkedin}`}>
                <SiLinkedin className="w-6 h-6" />
            </a>
            </div>
        </div>
    )
}