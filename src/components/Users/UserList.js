import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul >
                {props.userArr.map((user) => {

                    return <li><b>Name : </b> {user.Name} <br/> <b>Age : </b> {user.Age}</li>;
                })}
            </ul>
        </Card>
    );
};

export default UserList;
