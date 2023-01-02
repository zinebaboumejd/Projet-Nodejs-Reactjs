import React from "react";

function Ajouterimage() {
  function ajouterImage() {
    const formData = new FormData();
    formData.append("image", document.getElementById("image").files[0]);
    fetch("http://localhost:3000/Api/Image/addImage", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const [image, setImage] = React.useState("");
  function handlerImage(e) {
    setImage(e.target.files);
    console.log(image);
  }
  return (
    <div>
      <div className="mx-auto w-full max-w-[550px] pt-32">
        <form>
          <div className="mb-5">
            <label
              for="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              type="file"
              id="image"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={handlerImage}
            />
          </div>

          <div>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              onClick={ajouterImage}
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ajouterimage;
