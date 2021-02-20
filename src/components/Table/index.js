import React, { useState } from "react";
import TableBody from "../TableBody";
import "./style.css";

function Table({ results, setResults, nameFilter="" }) {
  const [sortDirection, setSortDirection ] = useState(0);

  nameFilter=new RegExp(nameFilter, "i")
  results=results ?.filter((result, index) => nameFilter.test(result.name.first))

  if (sortDirection) {
    results.sort((a, b) => {
      if (a.name.first < b.name.first) return -sortDirection;
      if (b.name.first < a.name.first) return sortDirection;
      return 0;
    })
  }

  // function Ascending() {
  //   const ascending = [...results].sort((a, b) => {
  //     if (a.name.first < b.name.first) return -1;
  //     if (b.name.first < a.name.first) return 1;
  //     return 0;
  //   })
  //   setResults(ascending)
  //   // console.log(ascending)
  // }

  // function Descending() {
  //   const decending = [...results].sort((a, b) => {
  //     if (a.name.first < b.name.first) return -1;
  //     if (b.name.first < a.name.first) return 1;
  //     return 0;
  //   }).reverse();
  //   setResults(decending)
  //   // console.log(decending)
  // }

  // function Toggle() {
  //   sortDirection ? Descending():Ascending()
  //   setSync(!sortDirection)
  // }

  console.log(results, sortDirection)

  return (
    <table className="table">
      <thead className="">
        <tr>
        <th scope="col">
            <button type="button">Profile Photo</button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => {
              if (sortDirection)  {
                setSortDirection(-sortDirection)
              }else {
                setSortDirection(1);
              }

            }}>Name</button>
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
        {results.map((result, index) => (
            <TableBody key={index} result={result} index={index} />
          ))}
      </tbody>
    </table>
  );
}

export default Table;
