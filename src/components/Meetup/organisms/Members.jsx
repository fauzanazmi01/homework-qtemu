const Members = () => {
    return (
        <div className="pt-4">
            <div className="row pb-2">
                <h2 className="col">Members</h2>
                <div className="col d-flex justify-content-end align-items-center">
                    <a href="/" className="text-link">See all</a>
                </div>
            </div>
            <div className="mx-4 p-4 bg-body-secondary rounded">
                <div className="row">
                    <div className="mx-4 d-flex align-items-center justify-content-center"  style={{ width: '100px' }} >
                        <img src="https://picsum.photos/100" alt="" className="rounded-circle"/>
                    </div>
                    <div className="col d-flex flex-col align-items-center">
                        <div>
                            <h3 className="m-0">Organizers</h3>
                            <p className="m-0">Adhy Wiranata and 4 others.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;