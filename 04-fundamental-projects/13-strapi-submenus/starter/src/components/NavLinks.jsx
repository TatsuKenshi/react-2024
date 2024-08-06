import React from "react";
import sublinks from "../data";
import { useGlobalContext } from "../context/Context";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((sublink) => {
        const { pageId, page } = sublink;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={(e) => {
              setPageId(pageId);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
