import Headline from "./organisms/Headline.jsx";
import NextMeetup from "./organisms/NextMeetup.jsx";
import AboutMeetup from "./organisms/AboutMeetup.jsx";
import Members from "./organisms/Members.jsx";
import PastMeetups from "./organisms/PastMeetups.jsx";

const Meetup = () => {
    return (
        <div>
            <Headline/>
            <div className="p-3 container-xl">
                <NextMeetup/>
                <AboutMeetup/>
                <Members/>
                <PastMeetups/>
            </div>
        </div>
    )
}

export default Meetup;