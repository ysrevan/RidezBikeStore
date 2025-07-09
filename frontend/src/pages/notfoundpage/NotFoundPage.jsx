import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found</title>
                <meta name="description" content="Page not found - 404 Not Found" />
            </Helmet>
            <div className="not-found-container">
                <h1>404</h1>
                <p>The page you are looking for could not be found.</p>
                <button onClick={() => navigate('/')} className="home-button">
                    Go to Homepage
                </button>
            </div>
        </>
    )
}

export default NotFoundPage
