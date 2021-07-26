import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [enteredUserName, setEneteredUserName] = useState("");
  const [enteredAge, setEneteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        if(enteredUserName.trim().length === 0 && enteredAge.trim().length === 0){
            setError({
                title: "Empty Inputs",
                message: "please enter a valid name and age",
              });
        }
        else if(enteredUserName.trim().length !== 0 && enteredAge.trim().length === 0){
            setError({
                title: "Empty age",
                message: "please fill age input",
              });
        }
        else if(enteredUserName.trim().length === 0 && enteredAge.trim().length !== 0){
            setError({
                title: "Empty user name",
                message: "please fill user name input",
              });
        }
      
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a valid age (>0)",
      });
      return;
    }
    console.log(enteredUserName + " -- " + enteredAge);
    props.onAddUserHandler(enteredUserName, enteredAge);
    setEneteredUserName("");
    setEneteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEneteredUserName(event.target.value);
  };

  const ageNameChangeHandler = (event) => {
    setEneteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}></ErrorModel>
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={ageNameChangeHandler}
            value={enteredAge}
          />
          <Button type="button" onClick={addUserHandler}>
            AddUser
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
