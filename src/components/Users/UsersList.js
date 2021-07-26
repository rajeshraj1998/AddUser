import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UserListComponent = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.usersData.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserListComponent;
