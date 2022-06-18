import Link from 'next/link';

type LinkGameProps = {
    link: string;
    title: string;
}

const LinkGame = ({ link, title}: LinkGameProps) => {
    return (
        <Link href={link}>
            <div className="flex justify-center items-center w-96 h-96 bg-dark-blue hover:bg-blue-700 hover:cursor-pointer hover:select-none rounded-2xl m-5 shadow-xl">
                <h1 className="text-3xl text-center">{title}</h1>
            </div>
        </Link>
    )
}

export default LinkGame