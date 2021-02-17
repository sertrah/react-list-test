import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { TextField } from "@react-md/form";
import { TextFieldProps } from "@react-md/form/types/text-field";
import { Controller } from "react-hook-form";
import style from "./InputText.module.scss";

type InputTextProps = {
  id: string;
  errors: any;
  control: any;
  defaultValue?: string;
};
const InputText: FunctionComponent<
  InputTextProps & TextFieldProps & React.RefAttributes<HTMLInputElement>
> = ({ id, control, errors, defaultValue, ...props }) => {
  return (
    <Controller
      name={id}
      control={control}
      defaultValue={defaultValue}
      render={({ onChange, onBlur, value }) => (
        <div>
          <TextField
            id={id}
            name={id}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors[id]}
            {...props}
          />
          <span className={style["input--error"]}>{errors[id]?.message}</span>
        </div>
      )}
    />
  );
};

export default InputText;
