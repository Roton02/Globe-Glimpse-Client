import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
    const { user} = useContext(AuthContext);
    const [userspot, setUserSpot]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/addTousristSpot/${user.email}`)
        .then(response => response.json())
        .then(data => {
             console.log(data);
             setUserSpot(data)
         })
    },[])
    const handleDelete =id =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/addTousristSpot/${id}`,{
                method:'DELETE',
        
            }).then(res => res.json())
            .then(data => {
              if (data.deletedCount >0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
             const remaining = userspot.filter(cof => cof._id !== id)
             setUserSpot(remaining)
                console.log(data );
            })
             
            }
          });
    }
    
    return (
        <div className="md:px-10">
             
        <div className="overflow-x-auto border md:w-4/5 mx-auto bg-green-100 rounded-xl border-black  ">
		<table className="min-w-full text-xs">
			<thead className="dark:bg-gray-300 bg-slate-600 mt-10">
				<tr className="text-left text-white">
                <th></th>
					<th className="p-3">Tourist Name</th>
					<th className="p-3">TravelTime</th>
					<th className="p-3">countryName</th>
					<th className="p-3">Update</th>
					<th className="p-3">Delete</th>
					
				</tr>
			</thead>
				{
                    userspot.map((ld,i)=> <tbody key={ld._id}>
                        <tr  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                        <th>{i+1}</th>
                            <td className="p-3">
                                <p>{ld.Tourist}</p>
                            </td>
                            
                            <td className="p-3">
                                <p>{ld.TravelTime}</p>
                                
                            </td>
                            <td className="p-3">
                                <p>{ld.countryName}</p>
                                
                            </td>
                            <td className="">
                                <Link to={`/updateTourist/${ld._id}`}>
                               <button className="btn btn-sm ml-2 btn-primary"><FaRegEdit /></button>
                                </Link>
                            </td>
                            <td className="">
                               <button onClick={()=>handleDelete(ld._id)} className="btn btn-sm ml-2 btn-warning"> <MdDeleteForever /></button>
                            </td>
                        </tr>
                    </tbody> )
                }
			
		</table>
	</div>
        </div>
    );
};

export default MyList;