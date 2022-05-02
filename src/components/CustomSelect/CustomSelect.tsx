import Select, { StylesConfig } from "react-select";
import { IOption } from "../../types";

const CustomSelect = () => {
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      borderRadius: "5px",
      border: "1px solid rgba(238, 238, 238, 1)",
      cursor: "pointer",
    }),

    singleValue: (provided) => ({
      ...provided,
      textAlign: "center",
      color: " rgb(0, 0, 0)",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "15px",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: " #EEEEEE ",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      color: " #EEEEEE ",
    }),
  };

  const options: IOption[] = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBR", label: "GBR" },
  ];

  return (
    <Select
      options={options}
      isMulti={false}
      defaultValue={options[0]}
      styles={customStyles}
    />
  );
};

export default CustomSelect;