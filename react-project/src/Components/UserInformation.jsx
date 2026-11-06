const UserInformation = ({ firstName, lastName, email, age, city }) => {
  return (
    <div>
      <h1>User Information</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default UserInformation;
