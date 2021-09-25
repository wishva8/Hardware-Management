import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFOrders = (orders) => {
  const document = new jsPDF();

  const tableColumn = [
    "Order ID",
    "Order Description",
    "Item ID",
    "Quantity",
    "Unit Price",
    "Total Price",
    "order Date",
    "Customer Name",
    "Phone No.",
  ];

  const tableRows = [];

  if (orders && orders.length > 0) {
    orders.forEach((order) => {
      const dataRow = [
        order.orderId,
        order.description,
        order.itemId,
        order.quantity,
        order.unitPrice,
        order.totalPrice,
        order.date,
        order.customerName,
        order.customerPhoneNo,
      ];

      tableRows.push(dataRow);
    });
    document.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");

    const dateStr =
      date[0] + date[1] + date[2] + date[3] + date[4] + date[5] + date[6];
    // ticket title. and margin-top + margin-left
    document.text("Detail Order Report", 14, 15);
    // we define the name of our PDF file.
    document.save(`report_${dateStr}.pdf`);
  }
};
export default generatePDFOrders;
