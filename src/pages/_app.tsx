import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../styles/theme';
import createCache, { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import React from 'react'
import Head from 'next/head';

export interface CustomAppProps extends AppProps {
	emotionCache: EmotionCache;
}

export function createEmotionCache() {
	return createCache({key: 'css', prepend: true})
}

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps, emotionCache=clientSideEmotionCache }: CustomAppProps) {
	return (
		<React.Fragment>
			<Head>
				<link rel="icon" type="image/png" href="/mrg_logo3.svg" />
			</Head>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</React.Fragment> 
	)
}

export default MyApp
