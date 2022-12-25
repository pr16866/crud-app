import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
export default function Home() {
  const [user, setUser] = useState([]);
 
  useEffect(() => {
    users();
  }, []);
  const users = async () => {

    let data = await axios.get("/get-user");
    setUser(data.data);

  };
  const deleteUser = async (id) => {

    let resData = await axios.delete(`/remove-user/${id}`);
    if (resData.data.response === "Success") {
      toast.success("User deleted successfully");
    }
    users();
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Dob</th>
                <th scope="col">Address</th>
                <th scope="col">Delete</th>
              </tr>
          
            </thead>
            <tbody>
              {user.map((item, index) => {
                const { firstName, lastName, email, _id, dob, phone, address } =
                  item;
                // console.log(user_name,email,name,action)
                return (
                  <tr key={_id}>
                    <th scope="row">{index + 1}</th>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{dob}</td>
                    <td>{address}</td>
                    <td>
                
                     
                      <i
                        class="fas fa-trash-alt px-2 h5 text-danger border mx-1  shadow"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteUser(_id)}></i>
                    
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
