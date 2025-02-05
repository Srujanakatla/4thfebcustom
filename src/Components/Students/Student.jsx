import React from "react";
import "./students.css";

const Students = () => {
  const studentsData = [
    { id: 1, name: "Srujju", mail: "srujju@gmail.com", gender: "Female", age: 20, course: "B.Tech" },
    { id: 2, name: "katla", mail: "katla@gmail.com", gender: "Male", age: 22, course: "BSC" },
    { id: 3, name: "sagar", mail: "sagar@gmail.com", gender: "Male", age: 21, course: "BBA" }
  ];

  return (
    <div className="students">
      <h2>Student Details</h2>
      <table border={1} cellPadding={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.mail}</td>
              <td>{student.gender}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;



// import { studentData } from "../../Data/studentData";

// const Student = () =>{
//     return(
//         <>
//         <h1> Student data:</h1>
//         <button>Add student</button>
//         <table>
//         <thead>
//             <tr>
//                 <th>id</th>
//                 <th>age</th>
//                 <th>name</th>
//                 <th>mail</th>
//                 <th>gender</th>
//             </tr>
//         </thead>
//         {/* {studentData.map((Student,index)=>(
//             <>
//             <tr key={Student.id}></tr>
//             <th>{studentData}</th>
//             </>
//         ))} */}
//         </table>
//         </>
//     )
// }
// export default Student;