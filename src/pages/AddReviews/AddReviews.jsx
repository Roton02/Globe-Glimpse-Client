import { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";

const AddReviews = () => {
  const dateString = new Date().toISOString();
  const { user } = useContext(AuthContext);
  const [rating, setRatings] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(3);

  const { data = [], refetch } = useQuery({
    queryKey: ["rating"],
    queryFn: () =>
      axios
        .get("https://globeglimpse.vercel.app/ClientReview")
        .then((res) => res.data),
  });

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * perPage;
  const currentPageData = data.slice(offset, offset + perPage);
  const pageCount = Math.ceil(data.length / perPage);

  const ratingChanged = (newRating) => {
    setRatings(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const ratings = rating;
    const title = form.fillings.value;
    const description = form.description.value;
    const client_name = user.displayName;
    const image = user.photoURL;
    const addRatings = {
      ratings,
      title,
      description,
      client_name,
      image,
      dateString,
    };
    axios
      .post("https://globeglimpse.vercel.app/AddRatings", addRatings)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Add your Review!",
            text: "Thank you for giving review in our !",
            icon: "success",
          });
          form.reset();
          refetch();
        }
      });
  };
  //
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-5">
      <div className="w-full md:w-2/3 mb-8">
        {currentPageData.map((i) => (
          <div
            key={i._id}
            className="w-full border m-1 border-[#ff0000]  text-white  border-b-2 px-4 py-3 rounded-md shadow-md bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-light">---- -----</span>
              <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                {i.ratings} ⭐
              </span>
            </div>
            <div>
              <h1 className="mt-2 text-lg font-semibold">{i.title}</h1>
              <p className="mt-2 text-sm">{i.description}</p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-16 h-16 mt-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={i.image}
                  alt={i.client_name}
                />
              </div>
              <h2 className="text-2xl">{i.client_name}</h2>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-5">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex justify-center mt-4"}
            pageClassName={"page-item"}
            pageLinkClassName={
              "page-link px-3 py-1 border rounded-lg mx-1 text-gray-700 hover:bg-gray-200"
            }
            previousClassName={"page-item"}
            previousLinkClassName={
              "page-link px-3 py-1 border rounded-l-lg mx-1 text-gray-700 hover:bg-gray-200"
            }
            nextClassName={"page-item"}
            nextLinkClassName={
              "page-link px-3 py-1 border rounded-r-lg mx-1 text-gray-700 hover:bg-gray-200"
            }
            breakClassName={"page-item"}
            breakLinkClassName={
              "page-link px-3 py-1 border rounded-lg mx-1 text-gray-700 hover:bg-gray-200"
            }
            activeClassName={"active"}
            activeLinkClassName={"bg-blue-500 text-white"}
          />
        </div>
      </div>
      <div className="w-full md:w-1/3 ">
        <div className="flex flex-col max-w-xl p-8 shadow-sm  lg:p-12 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              Your opinion matters!
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <ReactStars
                    required
                    count={5}
                    onChange={ratingChanged}
                    size={45}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <select
                  name="fillings"
                  required
                  className="select select-bordered bg-white w-full mb-5 max-w-xs"
                >
                  <option disabled selected>
                    Tell your feelings
                  </option>
                  <option>Excellent Service</option>
                  <option>Professional Team</option>
                  <option>Good Service</option>
                  <option>Wonderful Experience</option>
                  <option>Not Good</option>
                  <option>Bad Service</option>
                </select>
                <textarea
                  required
                  rows="3"
                  name="description"
                  placeholder="Message..."
                  className="p-4 border-2 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 rounded-lg transition duration-300"
                >
                  <a
                    href="#_"
                    className="relative inline-block mt-2 px-14 py-2 font-medium group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">
                      Submit Feedback
                    </span>
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
