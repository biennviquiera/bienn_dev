import '../app/globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function LinkButton(props) {
    return (
        <Link className="w-1/2 p-2 flex justify-between items-center border rounded container mb-8 hover:text-neutral-300 transition duration-300" 
        href={props.url} target="_blank">
            <h3 className="font-semibold text-l">{props.title}</h3>
            <Image
                src="/open_link.webp"
                width={20}
                height={10}
                alt="Open link in new tab"
                style={{filter: 'invert(1)'}}
            />
        </Link>
    )
}
