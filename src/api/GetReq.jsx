import { useState, useEffect } from "react";
import axios from "axios";

const GetReq = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setInfo(response.data);
    });
  }, []);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          marginBottom: "50px",
        }}
      >
        User Information
      </h1>
      {info.map((e) => {
        return (
          <>
            <div style={{}}>
              {" "}
              <span
                style={{
                  marginLeft: "20px",
                }}
              >
                {e.name}
              </span>
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              >
                {e.email}
              </span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default GetReq;
