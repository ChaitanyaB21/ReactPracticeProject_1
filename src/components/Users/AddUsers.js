import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUsers = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [showPopUp , setshowPopUp] = useState(false);


    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length > 0 && enteredAge > -1) {

            props.onAddUser(enteredName, enteredAge);
            setEnteredName("");
            setEnteredAge("");
        }
        else{
            setshowPopUp(true);
        }
    };

    const userNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const handleOnModel = () => {
        setshowPopUp(false);
    }


    return (
        <div>
            
            {showPopUp && <ErrorModel onModel={handleOnModel} title="Hi" message="Something went wrong!" /> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredName} onChange={userNameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={userAgeChangeHandler} />
                    <div>
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddUsers;
