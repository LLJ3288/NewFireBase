import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      
      <div className="home">
        <Header></Header>
        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              
              <h2> Welcome to ChattApp </h2>
              <br></br>
              <p className="lead"><b><i>The Newest Way to Stay Connected</i></b></p>
              <div className="mt-4">
              <br></br>
                <button>
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                </button>
                <br></br>
                <button>
                <Link className="btn px-5" to="/login">Login to Your Account</Link>
                </button>
                
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}