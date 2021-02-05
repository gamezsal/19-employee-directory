import React from "react";
import Search from "../../components/Search";

function Header() {
  return (
    <div className="container-fluid text-center bg-primary border-bottom border-danger border-thick">
      <h1>Employee Directory</h1>
      <br />
      <Search />
    </div>
  );
}
