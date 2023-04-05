import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setLoading, setUsers } from "../slices/usersSlices";

import UserCard from "../components/UserCard";
import Button from "../components/Button";

const UsersPage = () => {
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (users?.length) return;
      dispatch(setLoading(true));
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch(setUsers(data));
    })();
  }, []);

  return (
    <>
      <Link to="add-user">
        <Button>Add User</Button>
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {isLoading && <h1 className="text-center">Loading...</h1>}
        {users?.length ? (
          users?.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <h1 className="text-center">No users found</h1>
        )}
      </div>
    </>
  );
};

export default UsersPage;
