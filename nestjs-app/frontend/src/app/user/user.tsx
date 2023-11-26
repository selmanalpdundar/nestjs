import styles from './user.module.scss';

interface UserProperties {
  firstName: string;
  lastName: string;
  id: number;
}

const User: React.FC<UserProperties> = ({ firstName, lastName }) => {
  console.log(firstName);
  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  );
};

export default User;
