import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import productdetails from "./productdetails";

const ITEMS_PER_PAGE = 6;

export const Product = ({ cart, setCart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const addingdata = (data) => {
    setCart([...cart, data]);
  };

  const currentProducts = productdetails.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="advertisers-service-sec pb-5">
        <div className="container">
          <div>
            <h1 className="cardheading">Find Your Products</h1>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            {currentProducts.map((data) => (
              <div className="col" key={data.id}>
                <div className="service-card">
                  <img src={data.img} className="card-img-top" alt="products" />
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
                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                      <span>{data.total}</span>
                      <span>${data.price}</span>
                    </div>
                  </div>
                  <button
                    className="productbutton"
                    onClick={() => addingdata(data)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center my-lg-5">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(productdetails.length / ITEMS_PER_PAGE)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};
