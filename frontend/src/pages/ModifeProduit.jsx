import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {  toast } from 'react-toastify';
function ModifeProduit() {
    const [data, setData] = useState({
        name: '',
        price: '',
        description: '',
    });
    // id local storege
    const id = localStorage.getItem('id');
    // useEffect(() => {
       
    //     // fetch data from api
    //     axios.get(`http://localhost:3000/Api/Produits/getProduitById/${id}`)
    //         .then((res) => {
    //         setData(res.data);
    //             console.log(res.data);
    //             console.log(res.data.nama);
               

    //             // setData(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });

    // }, [data]);
    // fetch data from api
 
    fetch(`http://localhost:3000/Api/Produits/getProduitById/${id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        // setData(data);
        // setData({
        //     name: data.name,
        //     price: data.price,
        //     description: data.description,
        // });
       
       
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    function hendleChange(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
        console.log(data);
      
    }
    
    function submit(e) {
        e.preventDefault();
        console.log(data);
        fetch(`http://localhost:3000/Api/Produits/updateProduit/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            
            window.location.href = "/AfficherProduit";
            setData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });  
    }
    
  return (
    <div>
        <div className="mx-auto w-full max-w-[550px] pt-32">
    <form 
    onSubmit={(e)=>submit(e)}
    >
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
          value={data.name}
           onChange={(e)=>hendleChange(e)}
        
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
          Modifier
        </button>
      </div>
    </form>
  </div>
        
    </div>
  )
}

export default ModifeProduit