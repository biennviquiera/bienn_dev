'use client'

import Image from 'next/image'
import Layout from './layout'
import './globals.css'
import { about } from '../lib/text'

export default function Home() {
  return (
      <Layout>
        <h1 className="font-bold text-4xl mb-4">Bienn Viquiera</h1>
        <div>
          {about()}
        </div>
      </Layout>
  )
}
