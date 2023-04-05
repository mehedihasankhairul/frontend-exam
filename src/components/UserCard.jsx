import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { deleteUser } from "../slices/usersSlices";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-100 p-5 flex items-center justify-between" key={user.id}>
      <div>
        <p className="text-gray-700 font-semibold">{user.id}</p>
        <h3 className="text-lg font-bold text-gray-700">{user.name}</h3>
        <span className="font-normal text-gray-500">{user.email}</span>
      </div>
      <div className="flex gap-4">
        <Link to="/update-user" state={user}>
          <FaEdit />
        </Link>

        <button onClick={() => dispatch(deleteUser(user.id))}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
