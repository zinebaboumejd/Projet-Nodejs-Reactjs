import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from "react-router-dom";
function AjouterProduit() {

   // ajouter un produit
    const [data, setData] = useState({
        name: "",
        price: "",
        description: ""
});
function submit(e){
    e.preventDefault();
    axios.post('http://localhost:3000/Api/Produits/addProduit', {
        name: data.name,
        price: parseFloat(data.price),
        description: data.description,
        
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    console.log(data)
    // navigat to AfficherProduit
   window.location = "/AfficherProduit";
    
}
function hendleChange(e) {
   const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
    // navigation
    
    
}

  return (
    
    <div>

<div className="mx-auto w-full max-w-[550px] pt-32">
    <form onSubmit={(e)=>submit(e)}>
      <div className="mb-5">
        <label
          for="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
           Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
        //   onChange={hendleChange((e) => setData({ ...data, [e.target.name]: e.target.value }))}
        onChange={(e)=>hendleChange(e)}
        value={data.name}
          placeholder="*
          Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        

       />
      </div>
      <div className="mb-5">
        <label
          for="price"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        price
        </label>
        <input
          type="numbre"
          name="price"
          id="price"
        //   onChange={hendleChange((e) => setData({ ...data, [e.target.name]: e.target.value }))}
        onChange={(e)=>hendleChange(e)}
        value={data.price}
          placeholder="Price"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="description"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Description 
        </label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e)=>hendleChange(e)}
          value={data.description}
          placeholder="Enter your  description"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>

    </div>
  )
}

export default AjouterProduit

