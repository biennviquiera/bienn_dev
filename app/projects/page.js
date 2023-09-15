import Layout from '../layout'
import Dropdown from '../../components/Dropdown';
import LinkButton from '../../components/LinkButton'

export default function Page() {
	return (
		<Layout>
			<div className="container">
				<Dropdown name="Disher" languages="Objective-C, Parse">
					<p>
						Disher is an iOS application built with Objective-C that allows users to save their favorite dishes,
						view its ingredients, and search using ingredients they currently possess.
					</p>
					<div className="flex gap-8">
						<LinkButton className="justify-center" title="GitHub Repository" url="https://github.com/biennviquiera/Disher"></LinkButton>
					</div>
				</Dropdown>

				<Dropdown name="Audio Looper" languages="Next.js, Express.js, AWS S3">
					<p>
						MP3 Looper is a web application that users to upload mp3 files and select a snippet to loop.
						It was inspired by a loop I created which received 800,000+ views on YouTube
					</p>
					<div className="flex gap-8">
						<LinkButton className="justify-center" title="Try it out here!" url="https://looper.bienn.dev"></LinkButton>
						<LinkButton className="justify-center" title="GitHub Repository" url="https://github.com/biennviquiera/looper"></LinkButton>

					</div>
				</Dropdown>

				<Dropdown name="Yale IMs" languages="React Native, Flask, SQLite, AWS EC2">
					<p>
						Yale Intramurals Sports is a mobile application for both iOS and React Native created to streamline the overall
						process of the intramurals process at Yale.
					</p>
				</Dropdown>

				<Dropdown name="SkipPlayer" languages="Python, PyQt5, ffmpeg">
					<p>
						SkipPlayer is a Python program aimed to help students review lectures by skipping silent portions of recordings.
					</p>
				</Dropdown>
			</div>
		</Layout>
	);
}