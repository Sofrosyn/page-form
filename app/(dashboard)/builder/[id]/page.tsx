import React from "react";

function BuilderPage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}

export default BuilderPage;
