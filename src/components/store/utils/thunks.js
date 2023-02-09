import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_SERV = "http://localhost:3001";

export const fetchPosts = createAsyncThunk(
  "posts/",
  async ({ page = 1, order = "desc", limit = 6 }, { getState }) => {
    return await axios
      .get(
        `${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
      )
      .then((response) => {
        console.log(response);
        const prevState = getState().posts;
        return {
          items: [...prevState.articles.items, ...response.data],
          page: page,
          end: response.data.length === 0,
        };
      })
      .catch((err) => {
        return console.log(err);
      });
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id) => {
    return await axios
      .get(`${URL_SERV}/posts/${id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }
);
