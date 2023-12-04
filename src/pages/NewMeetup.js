import React from "react";
import {useHistory} from 'react-router-dom';
import NewMeetupForm from "../meetup/NewMeetupForm";
const NewMeetup = () => {
  const history=useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-c81e8-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=>{
      history.replace('/');
    })
  }
  return (
    <section>
      <h1>Add NewMeetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
