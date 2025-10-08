import { Link, Meta, Title } from "react-head";

import React from "react";

function SEO({ title="Shagufta Madam", description="My madam My queen" }) {
  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
    </>
  );
}

export default SEO;
