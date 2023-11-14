import React from "react";

const Header = ({ title, text }) => {
  return (
    <article className="mb-10">
      <h1 className="text-[40px] font-medium font-quicksand mb-2">{title}</h1>
      <p className="max-w-[400px]">
        {text
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat harum facere sit ab est architecto nostrum molestias, error delectus."}
      </p>
    </article>
  );
};

export default Header;
