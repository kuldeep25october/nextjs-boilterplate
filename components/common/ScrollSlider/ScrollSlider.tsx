import React from "react";
import styles from "./styles.module.css";

import { Parallax } from "react-parallax";

const ScrollSlider = () => {
  /**
   * Images in the scroll bar
   */
  // ----------------------------------------------------------------------------------------
  const image1 =
    "https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3db69c42d6a9d_WILBURTON-EXTERIOR-FINAL.jpg";
  const image2 =
    "https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3db7c7f2d6a9c_Stellar_skingrips_full-hand.jpg";
  const image3 =
    "https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6148d60a98a3dba5f62d6aac_613cbb5b61d45304859adbf9__MG_9015-HDR-2.jpg";
  const image4 =
    "https://assets.website-files.com/6148d60a98a3dbf0ff2d6a96/6160994c12d9fe6f44bfc05e_60ff5c18633cf4c47c833f90_priestess-preview.jpg";
  // ------------------------------------------------------------------------------------------

  return (
    <>
      <div className={styles.container}>
        {/* ------------------------------------------------------------------------------------ */}
        <div className={styles.customstyles}>
          <Parallax bgImage={image1} strength={500}>
            <div style={{ height: "100vh" }}>
              <h3 className={styles.insideStyles}>MÉTRICA</h3>
            </div>
          </Parallax>
          <Parallax bgImage={image2} strength={-100}>
            <div style={{ height: "100vh" }}>
              <h3 className={styles.insideStyles}>STELLAR</h3>
            </div>
          </Parallax>
          <Parallax bgImage={image3} strength={500}>
            <div style={{ height: "100vh" }}>
              <h3 className={styles.insideStyles}>LOEVEN MORCEL</h3>
            </div>
          </Parallax>
          <Parallax bgImage={image4} strength={-100}>
            <div style={{ height: "100vh" }}>
              <h3 className={styles.insideStyles}>PRIESTLESS</h3>
            </div>
          </Parallax>
          <div style={{ height: 500 }} />
        </div>
      </div>
    </>
  );
};

export default ScrollSlider;
