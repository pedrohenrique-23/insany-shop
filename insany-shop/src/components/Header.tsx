"use client";

import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: #111;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
`;

export function Header() {
  return (
    <HeaderContainer>
      <Logo>InsanyShop</Logo>
      <SearchInput type="text" placeholder="Buscar produtos..." />
    </HeaderContainer>
  );
}