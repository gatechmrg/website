import { Button, Switch } from '@mui/material'
import Head from 'next/head'
import Header from '../components/nav/Header'
import Main from '../components/home/Main'
import Footer from '../components/nav/Footer'

export default function Home() {
	return (
		<>
			<Head>
				<title>GT Marine Robotics Group</title>
			</Head>
			<div className="root-header-footer">
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	)
}