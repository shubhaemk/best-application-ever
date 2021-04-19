import { useState, useEffect } from "react";

const BASE_URL = "https://api.stackexchange.com";
const API_VERSION = "2.2";
const API_NAME = "tags";
const API_SITE = "stackoverflow";
const DATA_ORDER = "desc";
const DATA_SORT = "popular";

const useWebService = (
  startDate,
  endDate,
  pageSize,
  pageCount,
  isSearch,
  setIsSearch
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getURL = () => {
    let BASE_BUILT_URL = `${BASE_URL}/${API_VERSION}/${API_NAME}?site=${API_SITE}&order=${DATA_ORDER}&sort=${DATA_SORT}`;
    if (pageSize && pageSize.trim() !== "") {
      BASE_BUILT_URL = `${BASE_BUILT_URL}&pageSize=${pageSize}`;
    }

    if (pageCount && pageCount.trim() !== "") {
      BASE_BUILT_URL = `${BASE_BUILT_URL}&page=${pageCount}`;
    }

    if (startDate) {
      BASE_BUILT_URL = `${BASE_BUILT_URL}&fromdate=${startDate}`;
    }

    if (endDate) {
      BASE_BUILT_URL = `${BASE_BUILT_URL}&todate=${endDate}&`;
    }

    return BASE_BUILT_URL;
  };

  useEffect(() => {
    if (isSearch) {
      (async () => {
        try {
          setLoading(true);
          setData(null);
          const response = await fetch(getURL(), {
            method: "GET",
          });

          if (response.status === 200) {
            const parsedResponse = await response.json();
            const { items } = parsedResponse;
            setData(items);
            setLoading(false);
            setIsSearch(false);
          } else {
            throw new Error("Connection Issue");
          }
        } catch (error) {
          setError(error);
          setLoading(false);
          setIsSearch(false);
          setData(null);
        }
      })();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearch]);

  return [loading, data, error];
};

export default useWebService;
