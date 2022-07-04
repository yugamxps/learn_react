import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";

//setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY218_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
  title: "Our Class is a Family",
  author: "Shannon Olsen",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          non commodi quod similique tempore deserunt exercitationem iusto
          voluptatibus omnis veritatis!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, author, title, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
