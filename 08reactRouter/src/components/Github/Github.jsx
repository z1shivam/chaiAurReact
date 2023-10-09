import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/z1shivam")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div
        className="text-center m4
     bg-gray-800 text-white text-3xl p-4"
      >
        Name: {data.name}
      </div>
      <div
        className="text-center m4
     bg-gray-800 text-white text-3xl p-4"
      >
        Repositories: {data.public_repos}
      </div>
      <div
        className="text-center m4
     bg-gray-800 text-white text-3xl p-4"
      >
        <img className="m-auto rounded w-48" src={data.avatar_url} alt="" />
      </div>
    </>
  );
}

export default Github;
