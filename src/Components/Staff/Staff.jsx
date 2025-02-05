import React from "react";
import "./staff.css";

const Staff = () => {
  const staffData = [
    { id: 1, name: "srujana", salary: 500000, gender: "Female", age: 30, mail: "srujana@gmail.com" },
    { id: 2, name: "Teja", salary: 100000, gender: "male", age: 28, mail: "teja@gmail.com" },
    { id: 3, name: "Chandu", salary: 200000, gender: "Female", age: 35, mail: "chandu@mail.com" }
  ];

  return (
    <div className="staff">
      <h2>Staff Details</h2>
      <table border={1} cellPadding={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.salary}</td>
              <td>{staff.gender}</td>
              <td>{staff.age}</td>
              <td>{staff.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Staff;




// const Staff = () =>{
//     return(
//         <>
//         <h1> Staff data:</h1>
//         </>
//     )
// }
// export default Staff;