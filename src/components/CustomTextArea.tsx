import { TextField, TextFieldProps, Typography } from "@mui/material";
import React, { useState } from "react";

interface CustomInputProps extends Omit<TextFieldProps, "onChange"> {
  isRequired?: boolean;
  rows?: number; 
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextArea: React.FC<CustomInputProps> = ({
  isRequired,
  onChange,
  rows,
  placeholder,
  ...restProps
}) => {
  const [touched, setTouched] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!touched) {
      setTouched(true);
    }
    if (onChange) {
      onChange(event);
    }
  };

  if(!rows){
    rows = 1;
    }

  return (
    <>
      {isRequired && !restProps.value && touched && (
        <Typography color="error" variant="caption">
          Este campo é obrigatório.
        </Typography>
      )}
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        placeholder={placeholder}
        multiline
        rows={rows}
        onChange={handleChange}
        {...restProps}
      />
    </>
  );
};

export default CustomTextArea;