import React from 'react';

const HeadlineImage = ({ imageUrl }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4 mb-md-0 mx-md-3 d-flex justify-content-center Headline-image">
            <img src={imageUrl} alt="" style={{width: "400px"}}/>
        </div>
    );
};

export default HeadlineImage;