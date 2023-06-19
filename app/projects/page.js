import Layout from '../layout'
import Dropdown from '../components/Dropdown';

export default function Page() {
    return (
        <Layout>
            <div className="container">
                <Dropdown name="Disher" languages="Objective-C, Parse">
                    <p>
                        Disher is an iOS application built with Objective-C that allows users to save their favorite dishes, 
                        view its ingredients, and search using ingredients they currently possess.
                    </p>
                </Dropdown>

                <Dropdown name="Yale IMs" languages="React Native, Flask, SQLite, AWS EC2">
                    <p>
                        Yale Intramurals Sports is a mobile application for both iOS and React Native created to streamline the overall
                        process of the intramurals process at Yale.
                    </p>
                </Dropdown>

                <Dropdown name="MP3 Looper" languages="Next.js">
                    <p>
                        MP3 Looper is a web application that users to upload mp3 files and select a snippet to loop. 
                        It was inspired by a loop I created which received 800,000+ views on YouTube
                    </p>
                </Dropdown>

                <Dropdown name="SkipPlayer" languages="Python, PyQt5, ffpmeg">
                    <p>
                        SkipPlayer is a Python program aimed to help students review lectures by skipping silent portions of recordings.
                    </p>
                </Dropdown>
            </div>
        </Layout>
    );
}