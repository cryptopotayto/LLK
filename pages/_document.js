import Document, { Html, Head, Main, NextScript } from "next/document";

class myDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <div id="notifications"></div>
                </body>
            </Html>
        )
    }
}

export default myDocument;