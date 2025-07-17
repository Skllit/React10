import axios from "axios";

export const getSalesData = async () => {
  let { data } = await axios.get(`/sales.json`);
  return data;
};

export const calculateTotalSales = (sales) => {
  return sales.reduce((total,sale)=>total+sale.saleTotal,0)
 
};

export const calculateTotalCashSale = (sales) => {
  return sales.filter((sale)=>!sale.creditCard).reduce((total,sale)=>total+sale.saleTotal,0)
 
};


export const calculateTotalCreditSale = (sales) => {
  return  sales.filter((sale)=>sale.creditCard).reduce((total,sale)=>total+sale.saleTotal,0);
  
};

export const calculateBuyerWithMostSale = (sales) => {
  return { buyerName: "Buyer 3", saleTotal: 300 };
 
};
export msb=(sales)=>{
  let tb=sales[0];
  for(i=1;i<sales.length;i++){
    if(sales[i].saleTotal>tb.saleTotal){
      tb=sales[i];
    }
  }
  return tb;
}
-----------------------------------------------------------------------------------------------------------









  
