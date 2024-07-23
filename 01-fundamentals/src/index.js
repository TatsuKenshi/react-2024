import React from "react";
import ReactDOM from "react-dom/client";
import books from "./books";
import Book from "./Book";
import "./index.css";

const Booklist = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} number={index} key={book.id} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);

// // // // // // // // // // // //
// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hello World")
//   );
// } React createElement way of creating components
// // // // // // // // // // // //

// Capital letters for component names

// Each component returns only one parent element

// multiple elements should be wrapped in react fragment
// // <React.Fragment></React.Fragment> or <></>

// camelCase for naming properties

// JSX has className instead of class

// all elements have to be closed
// // closing tag (div) or self-closing (img)

// React nests components to build complex apps and UIs.

// Local images are more performant in src than in public folder

// inline CSS in JSX is in double curlies {{}}
// // property names are in camelCase
// // values are in quotation marks ""

// inline javascript in JSX is in single curlies
// // it must be an expression - needs to return a value

// every component has a props object by default
// // props can be destructured in function parameters
// // // also in a separate variable in the function body

// children prop provides access to everything we render betwenn component tags <RandomComponent>{children}</RandomComponent>

// React CANNOT render objects directly in JSX

// whenever we render a list of items in JSX, we need the key prop
// // React needs a way of identifying and distinguishing them
// // while ok, index is the worst possible option because in some cases index numbers might change

// passing entire object as prop
// // propObject={propObject} or {...propObject}

// components in an iterated list are independent by default

// React Data Flow - data can only pass down by default
// passing props from parent to a child, to another child, etc, is called prop drilling
// alternatives: Context, Redux, other state management libraries
