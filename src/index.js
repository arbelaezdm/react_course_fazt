import React from "react";
import ReactDOM from "react-dom/client";
import { Gretting, Sum } from "./Gretting";
import Product from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {/* another way to show the component */}
    {Gretting()}

    {/* Self closing tags */}
    <Gretting title="Hello" name="Diego" />
    <Gretting title="React" />
    <Gretting title="Javascript" />
    <Gretting y={30} />
    <Gretting z={true} />
    <Gretting x={[1, 2, 3, 4, 5]} />
    <Product />
    <Sum />
  </div>
);
