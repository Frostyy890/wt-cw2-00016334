window.onload = () => {
  // Accessing form components using DOM manipulations
  const form = document.getElementById("edit-form");
  const name = document.getElementById("name");
  const imgURL = document.getElementById("imgURL");
  const price = document.getElementById("price");
  const description = document.getElementById("description");
  // Accessing product's id by splitting location url
  const splitPathname = window.location.pathname.split("/");
  const productId = Number(splitPathname[2]);
  const apiUrl = "http://localhost:3000/api/products";
  // Form handler
  form.addEventListener("submit", async (e) => {
    // Preventing form from refreshing the page
    e.preventDefault();
    // Storing input values in the object
    const productInfo = {
      name: name.value,
      imgURL: imgURL.value,
      price: Number(price.value),
      description: description.value,
    };
    // If product id is provided in url then its edit form, hence the patch request
    if (productId) {
      await axios
        .patch(`${apiUrl}/${productId}`, productInfo)
        .then((res) => {
          alert(res.data.message);
          window.location.reload();
          return res.data;
        })
        .catch((err) => {
          // Handling errors
          console.error(err);
          alert(`Error: ${err}`);
        });
    } else {
      // If id isn't provided then creates new product hence the post request
      await axios
        .post(apiUrl, productInfo)
        .then((res) => {
          alert(res.data.message);
          window.location.pathname = "/";
          return res.data;
        })
        .catch((err) => {
          // Handling errors
          console.error(err);
          alert(`Error: ${err}`);
        });
    }
  });
};
