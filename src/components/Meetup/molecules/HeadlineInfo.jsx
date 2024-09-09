import React from 'react';

const HeadlineInfo = ({ location, members, organizer }) => {
    return (
        <div className="col-md mb-md-0 d-flex align-items-center">
            <div className=''>
                <h2 className='text-center text-md-start'>Hacktiv8 Meetup</h2>
                <div>
                    <span style={{ width: '200px' }}>Location: </span>
                    {location}
                </div>
                <div>
                    <span style={{ width: '200px' }}>Members: </span>
                    {members}
                </div>
                <div>
                    <span style={{ width: '200px' }}>Organizers: </span>
                    {organizer}
                </div>
                <div className='mt-4'>
                    <button className="btn btn-primary">
                        Join Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeadlineInfo;
