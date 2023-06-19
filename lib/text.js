import Link from 'next/link'

export const about = () => {
    return (
        <>
        <p>Hi, my name is Bienn! I love building web and mobile apps to solve problems and provide tools to provide creative and recreational expression.</p>
        <p>I previously interned at Meta and College Match Los Angeles, and I aspire to be a software engineer.</p>
        <p>Please contact me at biennviquiera@gmail.com</p>

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

