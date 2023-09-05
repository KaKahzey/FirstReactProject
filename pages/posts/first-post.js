import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function FirstPost() {
    let [kidContent, setKidContent] = useState("")
    return (
        <div>
            <Head>
                <title>First post</title>
                
            </Head>
            <h1>First Post</h1>
            <Link href="/">retour</Link>
            <button onClick={() => {
                if(kidContent.type == ChildComponent){
                    setKidContent(<SecondChildComponent />)
                    
                }
                else{
                    setKidContent(<ChildComponent />)
                }
                
            }}>display</button>
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

function SecondChildComponent() {
    return (
        <div>
            <h1>Chatte!</h1>
        </div>
    )
}

