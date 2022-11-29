import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import styles from "../CountryPicker/CountryPicker.module.css";
import { countries } from "../../Api";

const CountryPicker = () => {
  const { fetchedCountries, setFetchedCountries } = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    };
    fetchCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value="global">Global</option>
        <option value="global">Global</option>
        <option value="global">Global</option>
        <option value="global">Global</option>
        <option value="global">Global</option>
        <option value="global">Global</option>
        <option value="global">Global</option>
        <option value="global">Global</option>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
