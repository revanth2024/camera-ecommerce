import React, { useState, useEffect } from "react";

export const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    let totalPrice = savedCart.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
    setPrice(totalPrice);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let totalPrice = cart.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
    setPrice(totalPrice);
  }, [cart]);

  const changevalue = (data, number) => {
    let updatedCart = cart.map((item) =>
      item === data ? { ...item, count: item.count + number } : item
    );
    setCart(updatedCart);
  };

  return (
    <>
      <div className="advertisers-service-sec">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
                {cart.map((data) => (
                  <div className="col" key={data.id}>
                    <div className="service-card">
                      <img
                        src={data.img}
                        className="card-img-top"
                        alt="products"
                      />
                      <h3>{data.name}</h3>
                      <p>{data.feature}</p>
                      <div className="card-body">
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>{data.minimalamout}</span>
                            <span>{data.minimalprice}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>{data.serviceamout}</span>
                            <span>{data.serviceprice}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>{data.adapter}</span>
                            <span>{data.adapterprice}</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between font-weight-bold mt-4">
                          <span>{data.total}</span>
                          <span>${data.price}</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-baseline justify-content-center">
                        <button
                          onClick={() => changevalue(data, -1)}
                          className="addingbtn"
                          disabled={data.count <= 0}
                        >
                          -
                        </button>
                        <span id="plusbtn">{data.count}</span>
                        <button
                          onClick={() => changevalue(data, +1)}
                          className="addingbtn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-4 col-sm-8">
              <div className="price-details">
                <h5>Price Details</h5>
                <p>
                  <span>Price ({cart.length} Items) :</span>{" "}
                  <span>{price}</span>
                </p>
                <p>
                  <span>Delivery Charges :</span>
                  <span style={{ color: "#388e3c", fontWeight: "600" }}>
                    Free
                  </span>
                </p>
                <h4>
                  <span>Total Amount : </span>
                  <span>$ {price}</span>
                </h4>
                <a href="tel:8056812955">
                  <button className="orderbtn">Place Order</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
