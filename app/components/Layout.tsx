import Head from 'next/head';
import React from 'react';

export const Layout = (props: {children: any}) => {
    return <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
            <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;900&family=Roboto:wght@300;400;500;900&display=swap" rel="stylesheet"/>
            <link rel="icon" type="image/x-icon" href="/adshark_logo_navbar.svg"/>
        </Head>
    </>
}