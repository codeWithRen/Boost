import React, { useState } from "react";
import NavBar from "./NavBar";
import Query from "./Query";

<<<<<<< HEAD
const click = async () => {
  try {
    await Excel.run(async (context) => {
      /**
       * Insert your Excel code here
       */
      const range = context.workbook.getSelectedRange();

      // Read the range address
      range.load("address");

      // Update the fill color
      range.format.fill.color = "yellow";

      await context.sync();
      console.log(`The range address was ${range.address}.`);
    });   
  } catch (error) {
    console.error(error);
  }
};

=======
>>>>>>> b76d46a67a21d962744836be6f49973a7e47648f
export default () => {
  const [page, setPage] = useState(<Query />);

  return (
    <div>
      <NavBar setPage={setPage} />
      {page}
    </div>
  );
};
