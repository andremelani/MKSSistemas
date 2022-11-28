import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { Container } from "./style";


interface Products {
  id: number
  quantity: number;
  price: number;
  name: string;
  photo: string;
  description: string,
}



const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      )
      .then((res: any) => {
        const data = res.data;
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        products?.map((item: Products) => {
          return <ProductItem key={item?.id} item={item} />;
        })
      )}
    </Container>
  );
};

export default Products;
