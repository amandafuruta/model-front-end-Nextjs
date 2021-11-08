import '../styles/globals.css'
import type { AppProps } from 'next/app'

import BaseLayoutComponent from 'components/layout/base'

export default function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <BaseLayoutComponent>
            <Component {...pageProps} />
        </BaseLayoutComponent>
    )
}
