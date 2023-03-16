import "../Styles/SearchUser.css";
import { filterUsers } from "../Features/userSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import "../Styles/SearchUser.css";

const SearchUser = () => {
  const reference = useRef("");
  const dispatch = useDispatch();
  const filteredUsers = () => {
    dispatch(filterUsers(reference.current.value));
  };

  return (
    <>
      <Box className="search-container">
        <TextField
          id="outlined-textarea"
          label="Seach"
          placeholder="Search by name or username"
          multiline
          size="small"
          fullWidth
          inputRef={reference}
          onChange={filteredUsers}
          name=""
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default SearchUser;
