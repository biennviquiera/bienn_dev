import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { clsx } from 'clsx';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image'

const buttons = {
    '/': {
        name: 'about',
    },
    // '/experience': {
    //     name: 'experience'
    // },
    '/projects': {
        name: 'projects'
    }
};

// Inspired by Lee Robinson's website https://leerob.io/
export default function Sidebar() {
    let pathname = usePathname() || '/';
    return (
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-sans-serif">
            <div className="flex flex-row md:flex-col justify-center relative">
                <Image
                    className="md:mb-8 rounded-full"
                    src="/profile.jpeg"
                    width={100}
                    height={100}
                    alt="Picture of Bienn"
                />
            </div>
            <div className="lg:sticky lg:top-20">
                <LayoutGroup>
                    <nav
                        className="flex flex-row md:flex-col justify-center relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                        id="nav"
                    >
                        <div className="flex flex-row md:flex-col space-x-0 mb-2 mt-2 md:mt-0">
                            {Object.entries(buttons).map(([path, { name }]) => {
                                const isActive = path === pathname;
                                return (
                                    <Link
                                        key={path}
                                        href={path}
                                        className={clsx(
                                            'transition-all hover:text-neutral-200 flex align-middle',
                                            {
                                                'text-neutral-500': !isActive,
                                                'font-bold': isActive,
                                            }
                                        )}
                                    >
                                        <span className="relative py-[5px] px-[10px]">
                                            {name}
                                            {path === pathname ? (
                                                <motion.div
                                                    className="absolute inset-0 bg-green-600 rounded-xl z-[-1]"
                                                    layoutId="sidebar"
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 400,
                                                        damping: 40,
                                                    }}
                                                />
                                            ) : null}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>
                </LayoutGroup>
            </div>
        </aside>
    );
}