import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bienn Viquiera',
  description: 'Aspiring software engineer studying computer science at Yale University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={
        'text-white bg-[#000000] dark:text-white dark:bg-[#000000]'}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  )
}
