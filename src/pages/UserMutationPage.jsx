import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser, updateUser } from "../slices/usersSlices";
import UserMutationForm from "../components/UserMutationForm";

const MutationUserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isUpdate = !!location.state;
  const currentUser = location.state || {};

  const handleSubmit = (user) => {
    dispatch(isUpdate ? updateUser({ ...currentUser, ...user }) : addUser({ ...user, id: Date.now() }));
    navigate("/");
  };

  return <UserMutationForm onSubmit={handleSubmit} user={currentUser} />;
};

export default MutationUserPage;
