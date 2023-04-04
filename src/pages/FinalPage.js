import React, { useState, useEffect, useRef } from "react";
import { useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";

const FinalPage = () => {
  const search = useLocation().search;
  const make = new URLSearchParams(search).get("make"),
    model = new URLSearchParams(search).get("model"),
    year = new URLSearchParams(search).get("year");

  const [error, setError] = useState(false);
  const [carData, setcarData] = useState([]);
  const [dealersData, setdealersData] = useState(null);
  const pincode = useRef("");

  useEffect(() => {
    fetch(
      `https://beta-api.getcardealstoday.com/api/v1/autos?make=${make}&model=${model}&year=${year}`
    )
      .then((res) => res.json())
      .then((data) => setcarData(data));
  }, [make, model, year]);

  const handlePincodeInput = (e) => {
    if (e.target.value.length > 11) {
      setError(true);
    } else {
      setError(false);
      pincode.current = e.target.value;
    }
  };

  const fetchDealersByPincode = () => {
    fetch(
      `https://beta-api.getcardealstoday.com/api/v1/dealers?make=${make}&model=${model}&year=${year}&size=${6}${
        pincode ? `&zipcode=${pincode.current}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setdealersData(data));
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="final-page">
          <div className="container">
            <div className="in">
              <div className="block info">
                <div>
                  <h2 className="dealer_title title">{`Find dealers near you for New ${make} ${model} ${year}`}</h2>
                  <div className="dealer_desc desc">
                    You Could Find $0 Down Payment Deals.
                  </div>
                  <div className="dealer_img">
                    <img
                      src={carData[0]?.imageUrls}
                      alt="car_img"
                      className="img-responsive"
                    />
                  </div>
                  <h2 className="dealer_car_name">{`${carData[0]?.year} ${carData[0]?.make} ${carData[0]?.model}`}</h2>
                  <div className="dealer_msg">
                    Complete the steps to see the best deal {`>>`}
                  </div>
                </div>
                {/* <temp-1 /> */}
              </div>
              <div className="block pincode">
                <div>
                  <h2 className="pincode_title title">Select Dealers</h2>
                  <input
                    placeholder="Enter Pincode"
                    className="pincode_input card"
                    type="number"
                    onChange={(e) => handlePincodeInput(e)}
                  />
                  {
                    <div className="pincode_error">
                      {error ? "Max 10 Characters Allowed!" : null}
                    </div>
                  }
                  <button
                    className="pincode_btn"
                    onClick={fetchDealersByPincode}
                  >
                    Fetch Dealers
                  </button>
                  <ul className="pincode_results">
                    {dealersData?.dealers?.length !== 0 ? (
                      dealersData?.dealers?.map((item, index) => (
                        <li key={`dealers${index}`}>
                          <div>{`${item.name}`}</div>
                          <div>{`City: ${item.city}`}</div>
                        </li>
                      ))
                    ) : (
                      <div className="desc">No Dealers Found!</div>
                    )}
                  </ul>
                  {pincode.current.length === 0 ? (
                    <div className="desc">
                      {`Please enter a US zip code to find the best deals for a ${carData[0]?.make} ${carData[0]?.model} ${carData[0]?.year}`}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="block form">
                <fc-element />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalPage;
