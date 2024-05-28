import { useEffect, useState } from "react";
import { TProduct } from "../../types";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products based on the search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product: TProduct) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [products, searchTerm]);

  return (
    <div>
      {/* search */}
      <div className="max-w-sm mx-auto ">
        <label className="input input-bordered flex items-center gap-2 bg-[#ddd] p-2 rounded-sm">
          <input
            type="text"
            className="grow focus:outline-0 bg-[#ddd]"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70 bg-[#ddd]"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* card */}
      <div className="grid grid-cols-12 gap-10 mt-[80px]">
        {filteredProducts.length ? (
          <>
            {filteredProducts.map((product: TProduct) => (
              <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 w-80 col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 border border-[#ddd] p-[10px]">
                <div className="flex justify-center items-center">
                  <img
                    src={product.image}
                    alt="Founders All Day IPA"
                    className=" object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  <p className="text-xl text-gray-700 mb-2">{product.price}</p>
                  <p className="text-gray-600">
                    Rating: {product.rating.average} ({product.rating.reviews}{" "}
                    reviews)
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {products?.map((product: TProduct) => (
              <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 w-80 col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 border border-[#ddd] p-[10px]">
                <div className="flex justify-center items-center">
                  <img
                    src={product.image}
                    alt="Founders All Day IPA"
                    className=" object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  <p className="text-xl text-gray-700 mb-2">{product.price}</p>
                  <p className="text-gray-600">
                    Rating: {product.rating.average} ({product.rating.reviews}{" "}
                    reviews)
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
