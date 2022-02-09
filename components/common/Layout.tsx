import React, { ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";
import styles from "../../styles/navbar.module.css";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <div className={styles.headerMenu}>
          <div>
            <Link href="/about">Home</Link>
          </div>
          <div>Menu</div>
        </div>
      </nav>
    </header>
    <LayoutComp>{children}</LayoutComp>
  </div>
);
const LayoutComp = styled.div`
  background: gray;
`;

export default Layout;
