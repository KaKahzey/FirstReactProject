import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect, useState } from 'react'


export default function FirstPost() {
    let kidContent = null
    let DisplayKid = () =>{
        if(kidContent === null) {
            kidContent = <ChildComponent />
        }
        else {
            kidContent = null
        }
    }
    return (
        <div>
            <Head>
                <title>First post</title>
                
            </Head>
            <h1>First Post</h1>
            <Link href="/">retour</Link>
            <button onClick={DisplayKid}>display</button>
            {kidContent}
        </div>
    )
}

function ChildComponent() {
    return (
        <div>
            <h1>bite!</h1>
        </div>
    )
}

  