import React from "react";
const EmployeeCard = ({employee}) =>{
    return(
        <div className="card" style={{width:'18rem',margin:'10px'}}>
        <div className="card-body">
            <h4 className="card-title">Employee Id:{employee.id}</h4>
            <p className="card-title">Designation:{employee.designation}</p>
            <p className="card-title">Salary:{employee.salary}</p>

        </div>
        </div>
    );
};
const EmployeeInfo = () =>{
    const employees=[
        {id:1,designation:'hr',salary:'787898'},
        {id:5,designation:'ceo',salary:'787898'},
        {id:6,designation:'tester',salary:'787898'},
    ];
    return(
        <div className="container">
            <h5 className>Employee Information</h5>
            <div className="row">
                {employees.map(employee =>(
                    <div className="col mb-4" key={employee.id}>
                    <EmployeeCard employee = {employee} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default EmployeeInfo;
