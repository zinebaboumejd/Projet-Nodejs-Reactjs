import React, { Component } from 'react'
import axios from 'axios';

 class Afficher_axios extends Component {
    constructor(props){
        super(props);
        this.state = {
            myArray: [
{id:1 ,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},
{id:2 ,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},
{id:3 ,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}},
{id:4 ,"name":"Patricia Lebsack","username":"Karianne","email":"Patricia Lebsack","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},
]
        }
    }
 getuser = () => {
    axios.get('users')
    .then(res => {
        console.log(res.data);
        this.setState({myArray: res.data})
    })
    .catch(err => {
        console.log(err);
    })
}
componentDidMount(){
    this.getuser();
}
  render() {
    return (
      <div>
  <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
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
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-100">
                   {this.state.myArray.map(item => (
    
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
                                <div className="text-left font-medium text-green-500">
                                   {item.email}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="text-left font-medium text-green-500">
                                   {item.address.city}
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
            </div>

            <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                <div>Total</div>
                <div className="text-blue-600">RM <span x-text="total.toFixed(2)"></span></div>
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
}

export default Afficher_axios
