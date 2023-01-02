import React from 'react'

function Afficher_fetch() {
// fetcher data
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h1>afficher fetch</h1>
      <section className="antialiased  bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
    <div className="flex flex-col justify-center h-full">
    
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-semibold text-gray-800">Manage Carts</div>
            </header>

            <div className="overflow-x-auto p-3">
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
                            <th className="p-2">
                                <div className="font-semibold text-center">Edit</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-100">
                   {data && data.map((item) => (

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
                                  {item.username}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="text-left font-medium text-blue-600">
                                {item.email}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="text-left font-medium text-gray-800">
                                 {item.address.city}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="flex justify-center text-red-600">
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
                            <td className="p-2">
                                <div className="flex justify-center text-green-600">
                                    <button>
                                       {/*svg  edit */}

                                        <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0v8m0 0a2 2 0 100-4 2 2 0 000 4z">
                                            </path>
                                        </svg>
                                     
                                    </button>
                                </div>
                            </td>
                        </tr>

                      
))}
                       
                    </tbody>
                </table>
            </div>

           

            <div className="flex justify-end">
                <input type="hidden" className="border border-black bg-gray-50" x-model="selected" />
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Afficher_fetch