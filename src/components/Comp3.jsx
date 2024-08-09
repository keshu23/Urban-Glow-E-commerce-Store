import { useContext } from "react";
import { data, data1 } from "./Comp1";

const Comp3 = () => {
  const firstName = useContext(data);
  const myGender = useContext(data1);

  return (
    <>
      <h2>
        {" "}
        Hey, my name is {firstName} and my gender is {myGender}
      </h2>
    </>
  );
};

export default Comp3;
