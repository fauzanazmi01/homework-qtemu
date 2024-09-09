import React, { Component } from 'react';
import PastMeetupCard from '../molecules/PastMeetupCard';

class PastMeetups extends Component {
    constructor() {
        super();
        this.state = {
            pastMeetups: [
                {
                    date: "27 November 2017",
                    description: "#39 JakartaJS April meetup with Kumparan",
                    went: 139
                },
                {
                    date: "27 October 2017",
                    description: "#38 JakartaJS April meetup with Blibli",
                    went: 113
                },
                {
                    date: "27 November 2017",
                    description: "#36 JakartaJS April meetup with Hacktiv8",
                    went: 139
                }
            ]
        }
    }
    render() {
        return (
            <div className="pt-4">
                <div className="row pb-2">
                    <h2 className="col">Past Meetups</h2>
                    <div className="col d-flex justify-content-end align-items-center">
                        <a href="/" className="text-link">See all</a>
                    </div>
                </div>
                <div className="row g-4 row-md-1 mx-4 justify-content-center">
                    {this.state.pastMeetups.map(element => (
                        <div className="col-12 col-md-4">
                            {PastMeetupCard({ date: element.date, description: element.description, participants: element.went })}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PastMeetups;