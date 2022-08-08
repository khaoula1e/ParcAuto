import React, { Component } from "react";
import { MenuList, detailVehicule } from "./components/MenuList";
const ProductContext = React.createContext();
//provider
//consumer 


class ProductProvider extends Component {
  state = {
    products: [],
    detailVehicule: detailVehicule,
    modalOpen: false,
    modalProduct: detailVehicule,

  };
  
  setProducts = () => {
    let products = [];
    MenuList.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailVehicule: product };
    });
  };
 
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };