import { useState } from "react";

import SearchBar from "../SearchBar";
import { useReactQuery } from "../services";
import DisplayGitInfo from "./DisplayGitInfo";

export default function GitSearchContainer() {
  const [searchedUser, setSearchedUser] = useState("");

  const { isLoading, error, data } = useReactQuery({
    criteria: searchedUser,
    url: `https://api.github.com/search/users?q=${searchedUser}`,
    enabled: !!searchedUser,
  });
  return (
    <div>
      <SearchBar setSearchedUser={setSearchedUser} />
      <div>
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : data ? (
          <DisplayGitInfo data={data} />
        ) : (
          "Search for git user"
        )}
      </div>
    </div>
  );
}
