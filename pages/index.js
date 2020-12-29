import { useState } from 'react'

import Head from 'next/head'

import Section from '../components/Section/Section'
import BigText from '../components/BigText/BigText'
import ClickListner from '../components/ClickListener/ClickListener'
import Footer from '../components/Footer/Footer'

import otaku from '../public/otaku.json'

const Index = ({ data }) => {
    const handleClick = () => {
        const oneArr = getOneFromArray(data)
        setArticle(oneArr.article)
        setAuthor(oneArr.author)
    }
    const [ currentArticle, setArticle ] = useState('클릭하여 시작하세요!')
    const [ currentAuthor, setAuthor ] = useState('someone')
    return (
        <>
            <Head>
                <title>{currentArticle}</title>
                <meta name="viewport" content="width=device-width,minimum-scale=1"></meta>
                <meta name="title" content="Otaku Cyoroina" />
                <meta name="description" content="뭘 보는 거야?" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap" rel="stylesheet" />
            </Head>
            <Section name="top">
                <ClickListner exFn={handleClick}>
                    <BigText article={
                        <>
                            {currentArticle}
                            <div style={{"fontSize": "20px"}}>Written by {currentAuthor}</div>
                        </>
                    } />
                </ClickListner>
            </Section>
            <Footer />
        </>
    )
}
const getOneFromArray = arr => arr[Math.floor(Math.random() * arr.length)]

export async function getStaticProps() {
    return {
        props: {
            data: otaku
        }
    }
}

export default Index  