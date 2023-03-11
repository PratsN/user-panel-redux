import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../Features/userSlice";
import axios from "axios";
import UserListing from "./UserListing";

const Landing = () => {
  //API to fetch data
  const API_URL = `https://jsonplaceholder.typicode.com/users`;
  const dispatch = useDispatch();

  //Fetching the data using axios
  const fetchUserData = async () => {
    try {
      let response = await axios.get(API_URL);
      dispatch(getUsers(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  //Using useEffect Hook to render data
  useEffect(() => {
    fetchUserData();
  }, [dispatch]);

  return (
    <>
      <UserListing />
    </>
  );
};

export default Landing;
