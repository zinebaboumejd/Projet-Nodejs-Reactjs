import React, { Component } from 'react'

 class Ajouter extends Component {
  render() {
    const myArray = [
        { id: 1, name: 'John', email: 'john@gmail.com', age: 20, phone: '555-555-5555' },
        { id: 2, name: 'Sara', email: 'sara@gmail.com', age: 25, phone: '666-666-6666' },
     
    ];
    return (
        <>
   

  <div class="container max-w-full mx-auto md:py-24 px-6">

  
 
     <table className="table-auto w-full">
     <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
         <tr>
         <th className="p-2">
                 <div className="font-semibold text-left">Id</div>
             </th>
             <th className="p-2">
                 <div className="font-semibold text-left">name</div>
             </th>
             <th className="p-2">
                 <div className="font-semibold text-left">username</div>
             </th>
             <th className="p-2">
                 <div className="font-semibold text-left">email</div>
             </th>
             <th className="p-2">
                 <div className="font-semibold text-center">address</div>
             </th>
             <th className="p-2">
                 <div className="font-semibold text-center">delet</div>
             </th>
         </tr>
     </thead>

     <tbody className="text-sm divide-y divide-gray-100">
    {myArray.map(item => (

         <tr>
              <td className="p-2">
                 <div className="font-medium text-gray-800">
                        {item.id}
                 </div>
             </td>
             <td className="p-2">
                 <div className="font-medium text-gray-800">
                    {item.name}
                 </div>
             </td>
             <td className="p-2">
                 <div className="text-left">
                   {item.email}
                 </div>
             </td>
             <td className="p-2">
                 <div className="text-left font-medium text-green-500">
                  {item.age}
                 </div>
             </td>
             <td className="p-2">
                 <div className="text-left font-medium text-green-500">
                    {item.phone}
                 </div>
             </td>
             <td className="p-2">
                 <div className="flex justify-center">
                     <button>
                         <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                             fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                             </path>
                         </svg>
                     </button>
                 </div>
             </td>
         </tr>

       
))}
        
     </tbody>
 </table>
       
  <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
            <div class="w-full relative">
                <div class="md:mt-6">
                    <div class="text-center font-semibold text-black">
                       Ajoutez vouter information 
                    </div>
                   
                    <form class="mt-8" >
                        <div class="mx-auto max-w-lg ">
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Username</span>
                                <input placeholder="" type="text"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                           
                          
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">email</span>
                                <input placeholder="" type="email" x-model="password_confirm"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            
                     
                            <button class="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                Ajouter
                            </button>
                        </div>
                    </form>

       

                </div>
            </div>
        </div>
    </div>
</div>
  
      
            
       
   
 </> 
   )
  }
}
export default Ajouter
