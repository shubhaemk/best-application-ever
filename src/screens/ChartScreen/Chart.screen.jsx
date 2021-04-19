import { useState, useEffect } from "react";

import BarChartComponent from "../../components/BarChartComponent/BarChart.component";
import ErrorComponent from "../../components/ErrorComponent/Error.component";
import FormComponent from "../../components/FormComponent/Form.component";
import LoadingComponent from "../../components/LoadingComponent/Loading.component";
import MessageComponent from "../../components/MessageComponent/Message.component";
import useWebService from "../../hooks/useWebService";

import "./Chart.styles.css";

const ChartScreen = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const [pageCount, setPageCount] = useState("1");
  const [isSearch, setIsSearch] = useState(false);
  const [inputError, setInputError] = useState(null);

  const getTimeStamp = (date) => {
    date = date.split("-");
    const newDate = new Date(date[0], date[1] - 1, date[2]);
    return Math.floor(new Date(newDate).getTime() / 1000);
  };

  const getGraphDetails = () => {
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);

    if (isNaN(startDateObject.getTime()) && startDate !== "") {
      setInputError("Invalid Start Date");
      return;
    }

    if (isNaN(endDateObject.getTime()) && endDate !== "") {
      setInputError("Invalid End Date");
      return;
    }

    if (
      !/^\d+$/.test(pageSize.trim()) ||
      !parseInt(pageSize) > 0 ||
      pageSize.trim().length > 3
    ) {
      setInputError("Invalid Page Size");
      return;
    }

    if (
      !/^\d+$/.test(pageCount.trim()) ||
      !parseInt(pageCount) > 0 ||
      pageCount.trim().length > 3
    ) {
      setInputError("Invalid Page Count");
      return;
    }

    setIsSearch(true);
  };

  const [loading, data, error] = useWebService(
    getTimeStamp(startDate),
    getTimeStamp(endDate),
    pageSize.trim(),
    pageCount.trim(),
    isSearch,
    setIsSearch
  );

  useEffect(() => {
    setInputError(null);
  }, [startDate, endDate, pageSize, pageCount]);

  return (
    <div className="chart-container">
      {loading && <LoadingComponent />}
      <div className="chart-setting-container">
        <FormComponent
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageCount={pageCount}
          setPageCount={setPageCount}
          handleSubmit={getGraphDetails}
          inputError={inputError}
        />
      </div>
      <div className="chart-container-wrapper">
        {data ? (
          <BarChartComponent chartData={data} />
        ) : error ? (
          <ErrorComponent errorText="Network Error! Try Again." isHuge={true} />
        ) : (
          <MessageComponent text={"Search to see Graph"} />
        )}
      </div>
    </div>
  );
};

export default ChartScreen;
