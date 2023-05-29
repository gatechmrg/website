import Document,
    {Html, Main, Head, NextScript, 
    DocumentInitialProps, DocumentContext} from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import { createEmotionCache } from './_app'

interface MyDocumentInitialProps extends Omit<DocumentInitialProps, 'enhanceApp'> {
    emotionStyleTags: JSX.Element[];
}

export default class MyDocument extends Document<MyDocumentInitialProps> {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {this.props.emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx:DocumentContext) => {

    const originalRenderPage = ctx.renderPage

    const cache = createEmotionCache()
    const {extractCriticalToChunks} = createEmotionServer(cache)

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App:any) => (props) => {
            return <App emotionCache={cache} {...props} />
        }
    })

    const initialProps = await Document.getInitialProps(ctx)

    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            dangerouslySetInnerHTML={{__html: style.css}}
        />
    ))

    return {
        ...initialProps,
        emotionStyleTags
    }
}