import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    id: 1,
    img: "./images/book-1.jpg",
    title: "Interesting Facts For Curious Minds",
    author: "Jordan Moore",
  },
  {
    id: 2,
    img: "./images/book-2.jpg",
    title: "Atomic Habits",
    author: "John Clear",
  },
  {
    id: 3,
    img: "./images/book-3.jpg",
    title: "Fairy Tale",
    author: "Stephen King",
  },
];

const Booklist = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book.title);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = ({ id, img, title, author, getBook }) => {
  // wrapper which invokes the function from the parent
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* invoke the function in an anonymous callback func */}
      <button
        onClick={() => {
          getBook(id);
        }}
      >
        click me
      </button>
      {/* reference the function wrapper */}
      <button onClick={getSingleBook}>click me</button>
      <h4>{author}</h4>
    </article>
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
