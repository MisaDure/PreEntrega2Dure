import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';


const UserData = ({firstName, lastName, age, birthdate}) => {

    const newAge = age + 1;

  return (
    <div>
        <ul>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{newAge}</li>
            <li>{birthdate}</li>
        </ul>
    </div>
  )
}

export default UserData

UserData.propType = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
}