import React, { useEffect, useState } from "react";
import { EmplyeeData } from "./EmployeeData";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(EmplyeeData);
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <table className="w-full flex flex-col">
        <thead className="flex border-b-2 items-center justify-between">
          <tr>Sr.No</tr>
          <tr>ID</tr>
          <tr>First Name</tr>
          <tr>Last Name</tr>
          <tr>Age</tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="flex border-b-2 items-center justify-between">
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
