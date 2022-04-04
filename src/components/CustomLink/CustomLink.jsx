import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ background: match ? "black" : "",color:match?"orange":"" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
};
