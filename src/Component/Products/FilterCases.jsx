export function filterProduct(select, product) {
  switch (select) {
    case "Sort by : Featured": {
      return product;
    }
    case "Alphabetically , A-Z": {
      const getdata = [...product];
      const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      const result = [];
      const gettitle = (param) =>
        getdata[param].title.slice(0, 1).toLowerCase();
      for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < getdata.length; j++) {
          if (alphabet[i] === gettitle(j)) {
            result.push(getdata[j]);
          }
        }
      }
      return result;
    }
    case "Alphabetically , Z-A": {
      const getdata = [...product];
      const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      const result = [];
      const gettitle = (param) =>
        getdata[param].title.slice(0, 1).toLowerCase();

      for (let i = alphabet.length - 1; i >= 0; i--) {
        for (let j = 0; j < getdata.length; j++) {
          if (alphabet[i] === gettitle(j)) {
            result.push(getdata[j]);
          }
        }
      }

      return result;
    }
    case "Price, low to high": {
      return [...product].sort((a, b) => {
        return (
          parseFloat(a.priceRange.minVariantPrice.amount) -
          parseFloat(b.priceRange.minVariantPrice.amount)
        );
      });
    }
    case "Price, high to low": {
      return [...product].sort((a, b) => {
        return (
          parseFloat(b.priceRange.minVariantPrice.amount) -
          parseFloat(a.priceRange.minVariantPrice.amount)
        );
      });
    }
    default: {
      console.log(3);
      break;
    }
  }
}
