import React, { Component } from "react";
import { readCsv as readCsvService } from "./service/api.js";

class ReadCsv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      magazines: [],
    };
  }
  componentDidMount() {
    console.log("mounted read csv");
    this.readCsv();
  }

  readCsv = () => {
    return readCsvService().then((data) => {
      this.setState({
        books: data.books,
        magazines: data.magazines,
      });
    });
  };

  render() {
    const { books, magazines } = this.state;
    return (
      <div>
        <h2>Parse CSV File</h2>
        <p>
          This is a demonstartion for part 1 and part 2 wherein a software reads
          a CSV data of books,magazine and authors and attempts to print out a
          meaningful output for the same
        </p>
        <h3>BOOKS</h3>
        {books.map((b) => (
          <div>
            <p>
              Title - {b.title}, Isbn - {b.isbn}, Author - {b.authors},
              Description - {b.description}
            </p>
          </div>
        ))}
        <h3>MAGAZINES</h3>
        {magazines.map((m) => (
          <div>
            <p>
              Title - {m.title}, Isbn - {m.isbn}, Author - {m.authors},
              Description - {m.publishedAt}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default ReadCsv;
