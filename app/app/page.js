'use client'

import { useState, useEffect } from 'react'

import { downloadPosts } from '@/components/Network.js'
import { BodySection } from './BodySection.js'
import { BottomSection } from '@/components/BottomSection.js'
import { StateContext } from './StateContext.js'

export default function Page() {

    const [feed, setFeed] = useState([])
    const [err, setErr] = useState(false)


    //Fetches posts per reload
    useEffect(() => {
        downloadPosts(setErr, setFeed)
    }, [])
    
    return (
        <StateContext.Provider value = {{

            feed: feed,
            setFeed: setFeed,

            err: err,
            setErr: setErr
        }}>

            <BodySection />


        </StateContext.Provider>
    )
}