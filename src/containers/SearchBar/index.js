import { FormControl } from "react-bootstrap";
export default function SearchBar({ setSearchedUser }) {
  return (
    <FormControl
      onBlur={(e) => {
        setSearchedUser(e.target.value);
      }}
    />
  );
}
