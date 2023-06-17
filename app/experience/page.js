import Layout from '../layout'
import { experience } from '../../lib/text'

export default function Page() {
    return (
        <Layout>
            <div className="mb-4">
                {experience()}
            </div>
        </Layout>
    );
}