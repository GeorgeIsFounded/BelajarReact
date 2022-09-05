import React from "react";

export default function User() {
  const [user, setUser] = React.useState([
    {
      name: "akbar",
      kelas: "XI RPL",
    },
    {
      name: "bayu",
      kelas: "XI RPL",
    },
    {
      name: "hilmi",
      kelas: "XI RPL",
    },
    {
      name: "nabil",
      kelas: "XI RPL",
    },
    {
      name: "rauza",
      kelas: "XI TKJ",
    },
  ]);
  return (
    <div>
      <h1>User Page</h1>
      <div className="flex flex-col"></div>
    </div>
  );
}
