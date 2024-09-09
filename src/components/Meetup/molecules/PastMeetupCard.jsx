import React from 'react';

const PastMeetupCard = ({ date, description, participants }) => {
    return (
        <div className="p-4 bg-body-secondary rounded">
            <h6>{date}</h6>
            <hr />
            <p>{description}</p>
            <div className="py-1">
                <strong>{participants}</strong> went
            </div>
        </div>
    )
}

export default PastMeetupCard;