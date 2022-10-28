import React from "react";

const Error = ({ errorName }) => {
  return (
    <>
      {errorName && (
        <span className="text-red-400 text-base mt-2">{errorName.message}</span>
      )}
    </>
  );
};

export default Error;
