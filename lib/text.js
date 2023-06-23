import Link from 'next/link'
import '../app/globals.css'

export const about = () => {
    return (
        <>
        <p>Hi, my name is Bienn! I love building web and mobile apps to solve problems and tools to provide creative and recreational expression.</p>
        <p>I previously interned at Meta and College Match Los Angeles, and am currently looking for software engineer positions.</p>
        <p>Please contact me at <Link href="mailto:biennviquiera@gmail.com" className='underline hover:text-neutral-300'>biennviquiera@gmail.com</Link> if you would like to connect!</p>

        </>
    );
};

export const experience = () => {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Meta University Engineering Intern - 2022</h1>
            <p className="text">I designed and developed a mobile application called <Link 
                    className="transition-all text-blue-300 hover:text-green-300" href="https://github.com/biennviquiera/Disher" target="_blank"><b>Disher</b>
                </Link> which lets users save their favorite recipes from the Spoonacular and TheMealDB APIs. My favorite feature I implemented was searching
                by ingredient, allowing users to find what the best matches for the current ingredients they have.<br />
            </p>
        </>
    )
};

