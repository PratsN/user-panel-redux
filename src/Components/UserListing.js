import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { default as getUsers } from "../Features/userAction";
import { setFilter } from "../Features/userSlice";
import SearchUser from "./SeachUser";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "./Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "../Styles/UserListing.css";
import "../Styles/FilterUser.css";

const UserListing = () => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  //fetching the user data using useSelector hook
  const { users } = useSelector((state) => state.users);

  //dropdown functionality
  const handleChange = (event) => {
    setName(event.target.value);
    dispatch(setFilter(event.target.value));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <section className="content-section">
        <Box className="serach-filter">
          <span className="serach-box">
            {" "}
            <SearchUser />
          </span>

          <span className="filter-box">
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Filter by Name
              </InputLabel>
              <Select
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={name}
                label="Filter by Name"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {users.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </span>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#2b4353" }}>
                <TableCell sx={{ color: "white" }}>ID</TableCell>
                <TableCell sx={{ color: "white" }}>NAME</TableCell>
                <TableCell sx={{ color: "white" }}>USERNAME</TableCell>
                <TableCell sx={{ color: "white" }}>EMAIL</TableCell>
                <TableCell sx={{ color: "white" }}>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    {" "}
                    <Modal data={users} id={row.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
};

export default UserListing;
