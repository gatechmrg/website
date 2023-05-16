import { Button, Switch } from '@mui/material'
import Head from 'next/head'
import Header from '../components/nav/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>GT Marine Robotics Group</title>
			</Head>
			<div>
				<Header />
				hello world
				<Switch />
				<Button color="primary">
					hello
				</Button>
			</div>
		</>
	)
}