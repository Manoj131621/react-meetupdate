import React, { useEffect, useState } from "react";
import MeetupList from "../meetup/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    fetch("https://react-meetup-c81e8-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      });
    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }
  }, [isLoading]);

  return (
    <div>
      <h1>AllMeetup</h1>
      {/* <ul>
        {DUMMY_DATA.map((meetup)=>{
          return <li key={meetup.id}>{meetup.title}</li>
        })}
      </ul> */}
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
};

export default AllMeetup;
