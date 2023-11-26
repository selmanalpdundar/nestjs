// eslint-disable-next-line @typescript-eslint/no-unused-vars
import User from './user/user';
import { UserServıce } from './user/services/user.service';
import React from 'react';

export function App() {
  const userService = new UserServıce();
  const [users, setUsers] = React.useState<User[]>([]);
  React.useEffect(() => {
    userService.getUsers().then((result) => {
      setUsers(result);
      console.log(result);
    });
  }, []);
  return (
    <div>
      {users !== undefined &&
        users.map((user) => <User {...user} key={user.id} />)}
    </div>
  );
}

export default App;
