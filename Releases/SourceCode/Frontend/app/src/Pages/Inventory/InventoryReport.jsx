import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a tickets argument
const generatePDFItems = (items) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = [
    "Inventory No.",
    "Item No.",
    "Item Category",
    "Description",
    "Unit Price",
    "Quantity",
  ];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array

  if (items && items.length > 0) {
    items.forEach((item) => {
      const dateRow = [
        item.inventoryNo,
        item.itemNo,
        item.itemCategory,
        item.description,
        item.unitPrice,
        item.quantity,
      ];
      // push each tickcet's info into a row
      tableRows.push(dateRow);
    });

    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr =
      date[0] + date[1] + date[2] + date[3] + date[4] + date[5] + date[6];
    // ticket title. and margin-top + margin-left
    doc.text("Detail Inventory Report", 14, 15);
    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
  }
};

export default generatePDFItems;
