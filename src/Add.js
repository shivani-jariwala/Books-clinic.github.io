import React, { Component } from "react";
import { addBook as addBookService } from "./service/api.js";
import moment from 'moment';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isbn: 0,
      author: '',
      description: ''
    };
  }

  submitBookDetails = () => {
    const {title,isbn,author,description} = this.state;
    const body = {
        bookTitle:title,
        bookIsbn:isbn,
        bookAuthor:author,
        bookDescription:description
    }
    return addBookService(body)
    .then((data) => {
      console.log("data",data)
        const url = window.URL.createObjectURL(new Blob([data.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `report_${moment().unix()}.csv`);
        document.body.appendChild(link);
        link.click();
    })
  }

  render() {
    const { books, magazines } = this.state;
    return (
      <div>
        <h2>Add a Book</h2>
        <p>
          This is a demonstartion for part 6 wherein a software adds a book/magazine details and generates a CSV for the same. For the time being, the frontend is just allowing addition of books but the backend is written to handle the addition of both books and magazines.
        </p>
        <p>Add a Title for your Book</p>
        <input
          type={'string'}
          style={{ height: '56px', width: '50%' }}
          value={this.state.title}
          onChange={(e) => {
            this.setState({title: e.target.value})
          }}
          className={`border font-semibold text-primary-natural text-title-m rounded-4 p-20px text-center focus:outline-none focus:border-primary border-primary`}
        />
        <p>Add an ISBN Number for your Book</p>
        <input
          type={'Number'}
          style={{ height: '56px', width: '50%' }}
          value={this.state.isbn}
          onChange={(e) => {
            this.setState({isbn: e.target.value})
          }}
          className={`border font-semibold text-primary-natural text-title-m rounded-4 p-20px text-center focus:outline-none focus:border-primary border-primary`}
        />
        <p>Add the name of Author</p>
        <input
          type={'string'}
          style={{ height: '56px', width: '50%' }}
          value={this.state.author}
          onChange={(e) => {
            this.setState({author: e.target.value})
          }}
          className={`border font-semibold text-primary-natural text-title-m rounded-4 p-20px text-center focus:outline-none focus:border-primary border-primary`}
        />
        <p>Write some description!</p>
        <input
          type={'text'}
          style={{ height: '56px', width: '50%' }}
          value={this.state.description}
          onChange={(e) => {
            this.setState({description: e.target.value})
          }}
          className={`border font-semibold text-primary-natural text-title-m rounded-4 p-20px text-center focus:outline-none focus:border-primary border-primary`}
        />
        <button 
            style={{margin:'20px', height:'45px',backgroundColor:'#0099FF'}}
            onClick={this.submitBookDetails}
        >
            SUBMIT
        </button>
      </div>
    );
  }
}

export default Add;
