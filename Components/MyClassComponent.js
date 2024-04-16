import React from "react";
class MyClassComponent extends React.Component {

    render() {
    
    return (
    
    <div className="Container-fluid">
    
    <h3>Employee Details..</h3>
    <table  className='table' style={{ tableLayout:'centre',width:'200px',height:'200px', alignContent:'center'}}>
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">EmpName</th>
          <th scope="col">Empid</th>
          <th scope="col">Phone-No</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-primary">
          <th scope="row">1</th>
          <td>RAJU</td>
          <td>55</td>
          <td>123456</td>
        </tr>
        <tr class="table-primary">
          <th scope="row">2</th>
          <td>BINDHU</td>
          <td>67</td>
          <td>67676</td>
        </tr>
        <tr class="table-primary">
          <th scope="row">3</th>
          <td>SREEJA</td>
          <td>45</td>
          <td>676768</td>
        </tr>
    
      </tbody>
    </table>
    
    
    
    </div>
    
    );
    
    }
    
    } 
export default MyClassComponent;