import React from 'react';

const MainComponent = () => {
    return (
        <div className="bg-body-secondary p-4 rounded">
            <div className="row">
                <div className="col-md-4 col-lg-3 mb-4 mb-md-0 d-flex justify-content-center">
                    <img src="https://picsum.photos/200" alt="" />
                </div>
                <div className="col-md mb-md-0">
                    <h2 className='text-center text-md-start'>Hacktiv8 Meetup</h2>
                    <div>
                        <span style={{ width: '200px' }}>Location: </span>
                        Indonesia
                    </div>
                    <div>
                        <span style={{ width: '200px' }}>Members: </span>
                        1078
                    </div>
                    <div>
                        <span style={{ width: '200px' }}>Organizers: </span>
                        Adhy Wiranata
                    </div>
                    <div className='mt-4'>
                        <button className="btn btn-primary">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;