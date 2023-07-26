import { TextField, TextFieldProps, Typography } from "@mui/material";
import React, { useState } from "react";

interface CustomInputProps extends Omit<TextFieldProps, "onChange"> {
  isIconActive?: boolean;
  isRequired?: boolean;
  isInValid?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  isIconActive,
  isRequired,
  isInValid,
  onChange,
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

  return (
    <>
      {isRequired && !restProps.value && touched && (
        <Typography color="error" variant="caption">
          Este campo é obrigatório.
        </Typography>
      )}
      {isInValid && touched && (
        <Typography color="error" variant="caption">
          Este campo está incorreto.
        </Typography>
      )}
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        InputProps={{
          endAdornment: isIconActive ? <div>Icon</div> : undefined,
          style: {
            borderColor: !isInValid && touched ? "red" : undefined,
          },
        }}
        onChange={handleChange}
        {...restProps}
      />
    </>
  );
};

export default CustomInput;