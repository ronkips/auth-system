import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
  //create Ref element
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "local and remote branches that are not present in the other branch, and Git is not sure how to merge them automatically",
        "The message suggests that you need to specify how to reconcile the divergent branches. You can do this by running one of the following Git commands",
        "Candy",
        "More Strings"
      ],
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    //Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h1>Hello there</h1>
      {/* element to display the typing string */}
      <span ref={el}></span>
    </div>
  );
};

export default Header;
