import React, { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTable } from "react-table";
import "./MyList.css"; // Add custom CSS for styling

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [userspot, setUserSpot] = useState([]);

    useEffect(() => {
        fetch(`https://globeglimpse.vercel.app/addTousristSpot/${user.email}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserSpot(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [user.email]); // Only re-run the effect if user.email changes

    const handleDelete = (id) => {
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
                fetch(`https://globeglimpse.vercel.app/addTousristSpot/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        setUserSpot(prevState => prevState.filter(item => item._id !== id));
                    } else {
                        Swal.fire({
                            title: "Failed to Delete!",
                            text: "Could not delete the item.",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    console.error("Error deleting item:", error);
                });
            }
        });
    };

    const data = useMemo(() => userspot, [userspot]);

    const columns = useMemo(
        () => [
            { Header: "ID", accessor: (row, i) => i + 1 },
            { Header: "Tourist", accessor: "Tourist" },
            { Header: "Time", accessor: "TravelTime" },
            { Header: "Country", accessor: "countryName" },
            {
                Header: "Update",
                accessor: "update",
                Cell: ({ row }) => (
                    <Link to={`/updateTourist/${row.original._id}`}>
                        <button className="btn btn-sm ml-2 bg-pink-600">
                            <FaRegEdit />
                        </button>
                    </Link>
                )
            },
            {
                Header: "Delete",
                accessor: "delete",
                Cell: ({ row }) => (
                    <button onClick={() => handleDelete(row.original._id)} className="btn btn-sm ml-2 btn-warning">
                        <MdDeleteForever />
                    </button>
                )
            }
        ],
        [handleDelete]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <div className="">
            <Helmet>
                <title>My List</title>
            </Helmet>
            <div className="table-container">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
