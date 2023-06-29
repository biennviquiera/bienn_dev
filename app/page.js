'use client'

import Image from 'next/image'
import Link from 'next/link'
import Layout from './layout'
import './globals.css'
import { about } from '../lib/text'

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className="font-bold text-4xl mb-4">Bienn Viquiera</h1>
        <div>
          {about()}

          <section className="container flex gap-6 items-center">
            {/* GitHub Logo */}
            <Link href="https://github.com/biennviquiera" target="_blank">
              <Image 
              src="/github-mark-white.svg" 
              target="_blank"
              alt="Bienn's GitHub Profile"
              width={50}
              height={100}
              />
            </Link>
            
            {/* LinkedIn Logo */}
            <Link href="https://linkedin.com/in/bienn-viquiera" target="_blank">
              <Image 
              src="/linkedin-white.png"
              alt="Bienn's LinkedIn Page"
              width={50}
              height={100}
              stroke="white"
              />
            </Link>

          </section>

        </div>
      </Layout>
    </div>
  )
}
