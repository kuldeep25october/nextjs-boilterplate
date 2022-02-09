import React, { FC } from "react";
import styled from "styled-components";
import Layout from "components/common/Layout";
import Link from "next/link";

const about: FC = () => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <AboutComponent>
          About components
            <Link href="/">
                <a>Home</a>
            </Link>
      </AboutComponent>
    </Layout>
  );
};

const AboutComponent = styled.div`
  color: blue;
  height: 80vh;
  font-size: 20px;
`;

export default about;
