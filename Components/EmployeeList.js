import React from 'react';
const EmployeeList = () =>{
    const employees=[
        {empId:1,name:'ramya',designation:'hr',salary:'4555555'},
        {empId:2,name:'rani',designation:'hr',salary:'400055'}
    ]
    return(
        <div>
            <h1>Employee Details..</h1>
            {employees.map(employee => (
                <div key={employee.empId}>
                    <p><strong>employee Id</strong>{employee.empId}</p>
                    <p><strong>name</strong>{employee.name}</p>
                    <p><strong>designation</strong>{employee.designation}</p>
                    <p><strong>salary</strong>{employee.salary}</p>
                <hr />
                </div>
            ))}
        </div>
    );
};
export default EmployeeList;