import MainComponent from "./Headline.jsx";
import NextMeetup from "./NextMeetup.jsx";
import AboutMeetup from "./AboutMeetup.jsx";
import Members from "./Members.jsx";
import PastMeetups from "./PastMeetups.jsx";

const Meetup = () => {
    return (
        <div>
            <MainComponent/>
            <NextMeetup/>
            <AboutMeetup/>
            <Members/>
            <PastMeetups/>
        </div>
    )
}

export default Meetup;