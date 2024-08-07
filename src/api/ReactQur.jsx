// import { useQuery } from "@tanstack/react-query";

// const ReactQur = () => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const response = await fetch("https://fakestoreapi.com/users");
//       const data = await response.json();
//       console.log(data);
//       return data;
//     },
//   });

//   if (isLoading) {
//     <div>Loading..</div>;
//   }

//   if (error) {
//     <div>Error:{error.message}</div>;
//   }

//   return (
//     <>
//       {/* fetching data from api endpoint bu using reactQuery */}

//       <h1 style={{ textAlign: "center" }}>React query Part</h1>
//       <ul>
//         {data?.map((users) => (
//           <li key={users.id}>
//             {users.name.firstname} {users.name.lastname}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ReactQur;

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ReactQur = () => {
  const [access, setAccess] = useState([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/carts");
      const data1 = await response.json();
      setAccess(data1.carts);
      return data1;
    },
  });

  if (isLoading) <div>Loading...</div>;

  if (error) <div>Error: {error.message}</div>;

  return (
    <>
      {access.map((shw, index) => (
        <div key={index}>
          {shw.products.map((shw1, index) => (
            <div key={index}>
              {shw1.title}
              <img src={shw1.thumbnail} alt="" />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ReactQur;
