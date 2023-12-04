import React,{useRef} from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'
const NewMeetupForm = (props) => {
    const titleInputRef= useRef();
    const imageInputRef= useRef();
    const addressInputRef= useRef();
    const descriptionInputRef= useRef();

    const submitHandler =(e)=>{
        e.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData={
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription
        }
        props.onAddMeetup(meetupData);
    }
  return (
    <div>
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='Image' ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address'ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required row='5' ref={descriptionInputRef}/>
                </div>
                <div className={classes.action}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    </div>
  )
}

export default NewMeetupForm