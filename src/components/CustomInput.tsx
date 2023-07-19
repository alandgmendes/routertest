import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

interface CustomInputProps extends Omit<TextFieldProps, "onChange"> {
  isIconActive: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  isIconActive,
  onChange,
  ...restProps
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <TextField
      variant="outlined"
      fullWidth
      size="small"
      InputProps={{
        endAdornment: isIconActive ? (
          // Your icon component goes here
          <div>Icon</div>
        ) : undefined,
      }}
      onChange={handleChange}
      {...restProps}
    />
  );
};

export default CustomInput;