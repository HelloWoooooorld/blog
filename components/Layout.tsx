import React from "react";
import { Header } from "./";
import { Props } from "../interfaces/layout";

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
