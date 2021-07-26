import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const userHandler = (uName, uAge)=>{
    console.log(uName+uAge)
    setUsersList((preUserList)=>{
      console.log('===>'+uName+ uAge)
        return[...preUserList, {name:uName, age:uAge, id:preUserList+1}]
    })

    //console.log(usersList.length)
  }

  return (
    <div className="App">
      <AddUser onAddUserHandler={userHandler}>
      </AddUser>
      <UsersList usersData={usersList}>
        
      </UsersList>
    </div>
  );
}

export default App;
