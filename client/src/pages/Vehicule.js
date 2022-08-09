import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";

export default class Vehicule extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, name, image, matricule} = value.detailVehicule;
          return (
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{name}</h1>
                </div>
              </div>
              {/*product info*/}
              <div className="row">
                {/*product img*/}
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={image} className="img-fluid" alt="product" />
                </div>
                {/*product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {name}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Number: <span className="text-uppercase">
                      {matricule}
                    </span>
                  </h4>
        
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product:
                  </p>
                  
                </div>
              </div>

            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
