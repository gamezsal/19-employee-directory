import React from "react";
import TableBody from "../TableBody";
import "./style.css";

function Table({ results, nameFilter="" }) {
  nameFilter=new RegExp(nameFilter, "i")
  results.sort((a, b) => {
    if (a.name.first < b.name.first) return -1;
    if (b.name.first < a.name.first) return 1;
    return 0;
  });

  return (
    <table className="table">
      <thead className="">
        <tr>
        <th scope="col">
            <button type="button">Profile Photo</button>
          </th>
          <th scope="col">
            <button type="button">Name</button>
          </th>
          <th scope="col">
            <button type="button">Date of Birth</button>
          </th>
          <th scope="col">
            <button type="button">Email</button>
          </th>
          <th scope="col">
            <button type="button">Phone</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {results
          ?.filter((result, index) => nameFilter.test(result.name.first))
          .map((result, index) => (
            <TableBody result={result} index={index} />
          ))}
      </tbody>
    </table>
  );
}

export default Table;
