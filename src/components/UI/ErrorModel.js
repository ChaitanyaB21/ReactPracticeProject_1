import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css"

const ErrorModel = (props) => {

    const handleFooterClick = () => {
        props.onModel();
    }

    return(
    <div>
        <div className={classes.backdrop} />
        <Card className={classes.modal} >
            <header className={classes.header} >
                <h2>
                    {props.title}
                </h2>

            </header>
            <div className={classes.content} >
                <p>
                    {props.message}
                </p>
            </div>
            <footer  className={classes.actions} >
                <Button onClick={handleFooterClick} >Okay</Button>
            </footer>
        </Card>
    </div>)

}

export default ErrorModel;