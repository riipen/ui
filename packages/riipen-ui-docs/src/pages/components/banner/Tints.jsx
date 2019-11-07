import React from "react";

import Banner from "@riipen-ui/components/Banner";

export default function Tints() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <div>
      <Banner
        height="50px"
        src="/static/images/banners/folders.jpg"
        tint="primary"
      />
      <div style={style} />
      <Banner
        height="50px"
        src="/static/images/banners/folders.jpg"
        tint="secondary"
      />
      <div style={style} />
      <Banner
        height="50px"
        src="/static/images/banners/folders.jpg"
        tint="tertiary"
      />
      <div style={style} />
      <Banner
        height="50px"
        src="/static/images/banners/folders.jpg"
        tint="positive"
      />
      <div style={style} />
      <Banner
        height="50px"
        src="/static/images/banners/folders.jpg"
        tint="negative"
      />
    </div>
  );
}
