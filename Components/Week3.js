// import React from "react";
// import Employeedetails from "./employeedetails";
// function week3(props){
//     console.log(props);
//     const student = {
//         id: "2211CS010297",
//         Name: "K.H.S.BHARADWAJ",
//         number: "85631479652",
//     }
//     return(
//         <div>
//             <Employeedetails Emp1={student}/>

//         </div>
//     );
// }
// export default week3;

import React from "react";
// import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Week3.css";

const PropsComponent = (props) => {
  return (
    <div>
      <div>
        <div className="container-1">
          <h2 className="t">
            <span style={{ color: "blue" }}>{props.name}</span>
          </h2>
          <h2 className="table table-primary table-striped">
              Registration id is:
            <span style={{ color: "orange" }}>{props.hallticket}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

const PropComponent = (props) => {
  const studentDetails = [
    {
      stu_id: "5678",
      stu_name: "Ramya",
      stu_email: "1111@mallareddyuniversity.ac.in",
    },
    {
      stu_id: "5555",
      stu_name: "Rani",
      stu_email: "5675@mallareddyuniversity.ac.in",
    },

    {
      stu_id: "3435",
      stu_name: "Reka",
      stu_email: "8989@mallareddyuniversity.ac.in",
    },
    {
      stu_id: "5658",
      stu_name: "Rajeshwari",
      stu_email: "6767@mallareddyuniversity.ac.in",
    },
  ];
  return (
    <div>
      <div className="container-2">
        <div class="center">
          <h3>Displaying  Using Function Component</h3>
          <h3>Student Details</h3>
          <table className="table table-danger table-striped" >
            <thead>
              <tr>
                <th>Std_ID</th>
                <th>Std_Name</th>
                <th>Std_Email</th>
              </tr>
            </thead>
            <tbody>
              {studentDetails.map((student, index) => (
                <tr data-index={index}>
                  <td>{student.stu_id}</td>
                  <td>{student.stu_name}</td>
                  <td>{student.stu_email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
class PropsClass extends React.Component {
  render() {
    const employeeDetails = [
      {
        emp_id: "1010",
        emp_name: "RAMYA",
        desg: "CEO",
      },
      {
        emp_id: "6060",
        emp_name: "REKHA",
        desg: "TESTER",
      },
      {
        emp_id: "4509",
        emp_name: "RANI",
        desg: "HR",
      },
      {
        emp_id: "3435",
        emp_name: "Akash",
        desg: "employee",
      },
    ];
    return (
      <div>
        <div className="container-3">
          <div class="text-center center">
            <h3>Displaying using Class Component</h3>
            <h3>Employee Details</h3>
            <table className="table table-secondary table-striped">
              <thead>
                <tr>
                  <th>Emp_ID</th>
                  <th>Emp_Name</th>
                  <th>Emp_Designation </th>
                </tr>
              </thead>
              <tbody>
                {employeeDetails.map((emp, index) => (
                  <tr data-index={index}>
                    <td>{emp.emp_id}</td>
                    <td>{emp.emp_name}</td>
                    <td>{emp.desg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const StudentComponent = (props) => {
  console.log(props);
  const { student } = props;
  return (
    <div>
      <div className="container-4">
        <table className="table table-info table-striped">
          <tbody>
            <tr>
              <td>Stud_Roll No.:</td>
              <td>{student.RollNo}</td>
            </tr>
            <tr>
              <td>Stud_Name:</td>
              <td>{student.Name}</td>
            </tr>
            <tr>
              <td>Stud_Mobile:</td>
              <td>{student.Mobile}</td>
            </tr>
            <tr>
              <td>Stud_Email:</td>
              <td>{student.Email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function Week3() {
  const student = {
    RollNo: "2211CS010625",
    Name: "M.Ramya",
    Mobile: "1234567890",
    Email: "2211cs010625@mallareddyuniversity.ac.in",
  };
  return (
    <div>
      <h1 style={{color:"violet"}}>Week 3</h1>
      <div class="container-1">
        <h1>Question 1</h1>
        <h5> Create a React Component, using props render one & multiple attribute values and display it on the webpage</h5>
        <h2>
          <h4>Component by using props</h4>
        </h2>
        <h3>Rendering single attributes by using props</h3>
        <PropsComponent name="M.Ramya" />
        <h3>Rendering multiple attributes by using props</h3>
        <PropsComponent name="M.Ramya" hallticket="2211CS010625" />
      </div>
      <hr></hr>
      <div class="container-2">
        <h1>Question 2</h1>
        <h2>
          <h3> Create a React Component, using props through functions display student details (Std-id, Std-Name, Std-Email) on the webpage.</h3>
        </h2>
        <PropComponent
          ID="2211CS010625"
          name="M.Ramya"
          email="2211cs010625@mallareddyuniversity.ac.in"
        />
      </div>
      <hr></hr>
      <div class="container-3">
        <h1>Question 3</h1>
        <h2>
          <h3> Create a React Component, using props through classes display employee details (Emp-id, Emp-Name, Emp-Designation) on the webpage.</h3>
        </h2>
        <PropsClass/>
      </div>
      <hr></hr>
      <div class="container-4">
        <h1>Question 4</h1>
        <h2>
          <h3>Create a Student component and able to display Student details which vary in htno, name, mailid, and mobileno to users.</h3>
        </h2>
        <StudentComponent student={student} />
      </div>
    </div>
  );
}