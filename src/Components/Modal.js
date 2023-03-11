import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LanguageIcon from "@mui/icons-material/Language";
import { Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "../Styles/Modal.css";

const Modal = ({ data, id }) => {
  //UseState hook to manage the state of modal
  const [open, setOpen] = useState(false);

  //Finding user to display there data in modal
  const searchUser = data.find((user) => user.id === id);

  //Created address format to display address
  const address =
    searchUser.address.suite +
    " , " +
    searchUser.address.street +
    " , " +
    searchUser.address.city +
    " , " +
    searchUser.address.zipcode;

  //Some websites are not in the proper order so creating a variable

  const website = "http://www." + searchUser.website;

  //handling the modal open and close
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{ backgroundColor: "#003399", color: "white" }}
        size="small"
        variant="contained"
        onClick={handleClickOpen}
      >
        Details
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box className="modal-header">
          <DialogTitle id="alert-dialog-title">Find Details Below </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              <ClearIcon />
            </Button>
          </DialogActions>
        </Box>

        <DialogContent sx={{ bgcolor: "#2b4353" }}>
          <DialogContentText id="alert-dialog-description">
            <List
              sx={{
                width: "100%",
                minWidth: 400,
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#b6e1e0", color: "black" }}>
                    <HomeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ color: "white" }} primary={address} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#b6e1e0", color: "black" }}>
                    <PhoneIphoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={searchUser.phone}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#b6e1e0", color: "black" }}>
                    <LanguageIcon />
                  </Avatar>
                </ListItemAvatar>
                <a target="_blank" href={website} rel="noreferrer">
                  <ListItemText
                    sx={{ color: "white" }}
                    primary={searchUser.website}
                  />
                </a>
                <Tooltip
                  title="Click on the link to visit the website"
                  placement="right"
                >
                  <IconButton sx={{ color: "white" }}>
                    <ErrorOutlineRoundedIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
