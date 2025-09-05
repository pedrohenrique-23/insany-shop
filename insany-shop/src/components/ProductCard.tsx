"use client";

import styled from "styled-components";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  background: #fff;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 2px 8px rgba(0,0,0,0.15);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 12px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #0070f3;
`;

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <Card>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>R$ {price.toFixed(2)}</ProductPrice>
    </Card>
  );
}
