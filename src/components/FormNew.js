import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormNew = () => {
  const [makeData, setmakeData] = useState([]);
  const [modelData, setmodelData] = useState([]);
  const [yearData, setyearData] = useState([]);
  const navigate = useNavigate();

  const makeModelValueRef = useRef({
    make: "",
    model: "",
    year: "",
  });

  const handleYearSelected = (e) => {
    makeModelValueRef.current.model = e.target.value;
    fetch(
      `https://beta-api.getcardealstoday.com/api/v1/autos?make=${makeModelValueRef.current.make}&model=${makeModelValueRef.current.model}`
    )
      .then((res) => res.json())
      .then((data) => setyearData(data));
  };
  const handleMakeSelected = (e) => {
    makeModelValueRef.current.make = e.target.value;
    fetch(
      `https://beta-api.getcardealstoday.com/api/v1/autos?make=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setmodelData(data.sort()));
  };

  useEffect(() => {
    fetch(`https://beta-api.getcardealstoday.com/api/v1/makes?`)
      .then((res) => res.json())
      .then((data) => setmakeData(data.sort()));
  }, []);

  return (
    <div className="landing">
      <div className="container">
        <h2>Select Make Model & Year</h2>
        <form className="form_main">
          <div className="form-input-wrap">
            <div className="form_block">
              <select
                onChange={(e) => handleMakeSelected(e)}
                className="custom_select"
              >
                <option value="" disabled selected hidden>
                  Make
                </option>
                {makeData.map((value, index) => (
                  <option value={value} name={value} key={`make${index}`}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="form_block">
              <select
                onChange={(e) => handleYearSelected(e)}
                disabled={makeModelValueRef.current.make === "" ? true : false}
                className="custom_select"
              >
                <option value="model" disabled selected hidden>
                  Model
                </option>
                {modelData.map((value, index) => (
                  <option
                    value={value.model}
                    name={value.model}
                    key={`model${index}`}
                  >
                    {value.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="form_block">
              <select
                disabled={makeModelValueRef.current.model === "" ? true : false}
                className="custom_select"
                defaultValue={"year"}
                onChange={(e) => {
                  makeModelValueRef.current.year = e.target.value;
                }}
              >
                <option value="" disabled selected hidden>
                  Year
                </option>
                {yearData.map((value, index) => (
                  <option
                    value={value.year}
                    name={value.year}
                    key={`year${index}`}
                  >
                    {value.year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-btn-wrap">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                navigate(
                  `/finalPage?model=${makeModelValueRef.current.model}&make=${makeModelValueRef.current.make}&year=${makeModelValueRef.current.year}`
                );
              }}
              className="form_button"
            >
              Search Dealers
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormNew;
