import Layout from '../layout'
import Dropdown from '../components/Dropdown';

export default function Page() {
    return (
        <Layout>
            <div className="container">
                <Dropdown name="Disher" languages="Objective-C, Parse">
                    Disher is an iOS application built with Objective-C that allows users to save their favorite dishes,
                    view its ingredients, and search using ingredients they currently possess.
                    
                </Dropdown>

                <Dropdown name="Yale IMs" languages="React Native, Flask, SQLite, AWS EC2">
                    Yale Intramurals Sports is a mobile application for both iOS and React Native created to streamline the overall
                    process of the intramurals process at Yale.

                </Dropdown>
            </div>
        </Layout>
    );
}