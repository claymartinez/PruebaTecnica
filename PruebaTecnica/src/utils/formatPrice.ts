function FormatPrice(number: number, currency: string = "USD") {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: currency,
    style: "currency",
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}

export default FormatPrice;