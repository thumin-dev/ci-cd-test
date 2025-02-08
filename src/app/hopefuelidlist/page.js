"use client";

import {
  Box,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import HopeFuelIDListItem from "./components/HopeFuelIDListItem";
import { useDebounce } from "use-debounce";

const PAGE_SIZE = 10;

const HopeFuelIdListPage = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [debouncedSearch] = useDebounce(searchText, 100);

  useEffect(() => {
    setError(null);
  }, [searchText]);

  const fetchData = useCallback(
    async (isNewSearch = false) => {
      if (!hasMore && !isNewSearch) return;

      setLoading(true);
      setError(null);

      try {
        const url = debouncedSearch
          ? `api/hopeFuelList/search?q=${encodeURIComponent(debouncedSearch)}`
          : `api/hopeFuelList/items?page=${page}&limit=${PAGE_SIZE}`;

        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Failed to fetch data (${response.status})`
          );
        }

        const newData = await response.json();

        if (isNewSearch) {
          setData(newData.data || []);
        } else {
          setData((prev) => [...prev, ...(newData.data || [])]);
        }

        setHasMore((newData.data || []).length === PAGE_SIZE);
      } catch (error) {
        setError(error.message);
        setData(isNewSearch ? [] : data);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [debouncedSearch, page, hasMore, data]
  );

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchData(true);
  }, [debouncedSearch]);

  // const filteredData = useMemo(() => {
  //   return HOPEFUEL_ID_LISTS.filter(
  //     (item) =>
  //       item.Name.toLowerCase().includes(searchText.toLowerCase()) ||
  //       item.Email.toLowerCase().includes(searchText.toLowerCase())
  //   );
  // }, [searchText]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100 &&
      !loading &&
      hasMore
    ) {
      setPage((prev) => prev + 1);
    }
  }, [loading, hasMore, error]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  if (loading) {
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <CircularProgress />
    </Box>;
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: 445,
          margin: "0 auto",
          padding: "14px",
          backgroundColor: "#F1F5F9",
          borderRadius: 20,
          mt: 3,
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>
      <Divider
        sx={{
          mx: "5rem",
          my: "2rem",
          borderColor: "#CBD5E1",
        }}
      />
      {data.length > 0 ? (
        <>
          <HopeFuelIDListItem data={data} onClick={() => {}} />
          {loading && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <CircularProgress />
            </Box>
          )}
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#334155",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            No Result Found
          </Typography>
        </Box>
      )}
    </>
  );
};

export default HopeFuelIdListPage;
