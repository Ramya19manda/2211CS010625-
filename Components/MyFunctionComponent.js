import React from "react";
function MyFunctionComponent(){
    return(
        <div>
            <table class="table  table-dark table-striped" style={{ tableLayout:'centre',width:'200px',height:'200px', alignContent:'center'}}>
  <thead>
    <tr>
      <th scope="col">serialno</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Mbno</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SHRUTHI</td>
      <td>CSE </td>
      <td>123456</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SNEHA</td>
      <td>AIML</td>
      <td>345683</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>SHOBHA</td>
      <td>IT</td>
      <td>468678</td>
    </tr>
  </tbody>
</table>
             </div>
    );
}
export default MyFunctionComponent;