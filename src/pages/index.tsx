/** @format */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>SujeitoPizza - Login</title>
			</Head>
			<main className='flex flex-col items-center w-[90%] md:w-full  m-auto gap-12'>
				<Image
					src='/logo.svg'
					width={300}
					height={0}
					alt='SujeitoPizza Logo'
				/>
				<div className='w-full max-w-xs'>
					<form className='flex flex-col gap-4 text-red'>
						<Input
							type='text'
							placeholder='Digite seu email'
						/>
						<Input
							type='password'
							placeholder='Sua senha'
						/>
						<Button
							type='submit'
							loading={false}>
							Acessar
						</Button>
					</form>
					<Link
						href='/signup'
						className='flex justify-center w-full mt-3 text-sm text-center transition-all duration-300 opacity-70 hover:opacity-100'>
						Não possui conta? Cadastre-se
					</Link>
				</div>
			</main>
		</>
	)
}
