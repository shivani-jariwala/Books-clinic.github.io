import React, { Component } from "react";
import { findByIsbn as findByIsbnService } from "./service/api.js";
 
class Isbn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isbnNumber:'',
          isbnBook: [],
          isbnMagazine: []
        };
      }

      submitIsbn = () => {
        const isbn = this.state.isbnNumber
        return findByIsbnService(isbn)
        .then((data) => {
            this.setState({
                isbnBook: data.isbnBook,
                isbnMagazine: data.isbnMagazine,
              });
        })
      }
  render() {
    const {isbnMagazine,isbnBook} = this.state;
    return (
      <div>
        <h2>Find Book/Magazine by ISBN</h2>
        <p>This is a demonstartion for part 3 wherein a book or magazine can be found by isbn number</p>
        <input
          type={'string'}
          style={{ height: '56px', width: '50%' }}
          value={this.state.isbnNumber}
          onChange={(e) => {
            this.setState({isbnNumber: e.target.value})
          }}
          className={`border font-semibold text-primary-natural text-title-m rounded-4 p-20px text-center focus:outline-none focus:border-primary border-primary`}
        />
        <button 
            style={{margin:'20px', height:'45px',backgroundColor:'#0099FF'}}
            onClick={this.submitIsbn}
        >
            SUBMIT
        </button>
        {isbnBook.length > 0 ?(
          <h3>BOOKS</h3>
        ):('')}
        {isbnBook.map((b) => (
          <div>
            <p>
              Title - {b.title}, Isbn - {b.isbn}, Author - {b.authors},
              Description - {b.description}
            </p>
          </div>
        ))}
        {/* {isbnMagazine.length > 0 ?(
          <h3>MAGAZINES</h3>
        ):('')} */}
        {isbnMagazine.map((m) => (
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
 
export default Isbn;