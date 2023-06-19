export default function Dropdown(props) {
    return (
        <details className="container group pb-8 transition-transform">
            <summary className="active:text-green-400 transition-colors list-none flex flex-wrap items-center pb-3 cursor-pointer hover:text-neutral-300">
                <h3 className="flex flex-1 font-semibold text-3xl">{props.name}</h3>
                <h2 className="flex flex-start pr-8">{props.languages}</h2>
                <div className="border-8 border-transparent border-l-white 
                group-open:rotate-90 duration-300 transition-transform origin-left"></div>
            </summary>
            <p>
                {props.children}
            </p>
        </details>
    )
}