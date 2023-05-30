import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {

    const [userArr , setUserArr] = useState([]);

    const addUserHandler = (username , userAge) => {
        setUserArr((prevArr) => {
            return [...prevArr , {'Name' : username , 'Age' : userAge}]
        })
    }

    return (
        <div>
            <AddUsers onAddUser = {addUserHandler} />
            <UserList userArr={userArr} />
        </div>
    );
}

export default App;
