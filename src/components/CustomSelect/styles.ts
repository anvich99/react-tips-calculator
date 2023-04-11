import styled from "styled-components";
import { StylesConfig } from "react-select";
import { Option } from "../../types/types";

export const selectStyle: StylesConfig<Option, false> = {
  control: (baseStyles) => ({
    ...baseStyles,
    padding: "21px 122px",
    height: "68px",
    textAlign: "center",
    border: "none",
    borderRadius: "34px",
    fontSize: "18px",
  }),
};
