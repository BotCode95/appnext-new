import { MainLayout } from "../../components/layouts/MainLayout"
import Link from 'next/link'

export default function PricingPage() {
  return (
    <MainLayout>
        <h1>Pricing Page</h1>
        <h1 className='title'>
            Ir a <Link href="/">Home</Link>
        </h1>
        <p className='description'>
        Get started by editing{' '}
        <code  className='code'>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
