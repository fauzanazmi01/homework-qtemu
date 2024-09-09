import { Component } from 'react';
import HeadlineImage from '../atoms/HeadlineImage';
import HeadlineInfo from '../molecules/HeadlineInfo';

class Headline extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: "https://picsum.photos/800/600",
            location: "Indonesia",
            members: 1078,
            organizers: "Adhy Wiranata"
        }
    }
    render() {
        return (
            <div className="bg-body-secondary">
                <div className="container-xl p-4">
                    <div className='row'>
                        <HeadlineImage imageUrl={this.state.imageUrl} />
                        <HeadlineInfo location={this.state.location} members={this.state.members} organizer={this.state.organizers} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Headline;