import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../Features/userSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "./Modal";
import "../Styles/UserListing.css";

const UserListing = () => {
  //fetching the user data using useSelector hook
  const users = useSelector(getUsers);
  // console.log(users.payload.user.users);

  return (
    <>
      <section className="content-section">
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
              {users.payload.user.users.map((row) => (
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
                    <Modal data={users.payload.user.users} id={row.id} />
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
