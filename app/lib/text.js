import Link from 'next/link'
export const about = () => {
    return (
        <>
        Hi I'm Bienn. I'm a rising computer science student at Yale University.<br />
        I love building web and mobile apps, and I am aspiring to be a software engineer.
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
}

