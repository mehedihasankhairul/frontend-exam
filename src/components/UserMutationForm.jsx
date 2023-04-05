import TextFiled from "./TextFiled";
import Button from "./Button";

const UserMutationForm = ({ onSubmit, user }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    if (name === "" || email === "") throw new Error("Please fill all the fields");
    onSubmit({ name, email });
  };

  return (
    <form className="mt-10 max-w-xl mx-auto" onSubmit={handleSubmit}>
      <TextFiled label="Name" type="text" defaultValue={user?.name} placeholder="Enter your name" />
      <br />
      <TextFiled label="Email" type="email" defaultValue={user?.email} placeholder="Enter your email" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserMutationForm;
