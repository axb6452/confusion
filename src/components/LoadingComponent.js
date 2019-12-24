import React from 'react'

export const Loading = () => {
    return (
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span> {/* creates a rotating spinner on the screen displaying loading* */}
            <p>Loading...</p>
        </div>
    )
}