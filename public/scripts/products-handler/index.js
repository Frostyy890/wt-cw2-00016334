window.onload = () => {
  // Accessing buttons and links using DOM manipulations
  const updateBtns = document.querySelectorAll(".edit-btn");
  const deleteBtns = document.querySelectorAll(".btn-delete");
  const apiUrl = "http://localhost:3000/api/products";
  for (let i = 0; i < updateBtns.length; i++) {
    //Accessing each link's href attribute
    const btnLink = updateBtns[i].getAttribute("href");
    // Accessing products id by splitting href url
    const splitPath = btnLink.split("/");
    const productId = Number(splitPath[2]);
    deleteBtns[i].addEventListener("click", async () => {
      if (
        window.confirm("Are you sure you want to delete this product?") === true
      ) {
        //Sending request to the server to delete item with selected product's id
        await axios
          .delete(`${apiUrl}/${productId}`)
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
        return;
      }
    });
  }
};
