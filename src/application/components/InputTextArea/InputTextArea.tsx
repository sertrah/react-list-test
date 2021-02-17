import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { TextArea } from "@react-md/form";
import { TextAreaProps } from "@react-md/form/types/text-field";
import { Controller } from "react-hook-form";
import style from "./InputText.module.scss";

type InputTextProps = {
  id: string;
  errors: any;
  control: any;
  defaultValue?: string;
};
const InputText: FunctionComponent<
  InputTextProps & TextAreaProps & React.RefAttributes<HTMLTextAreaElement>
> = ({ id, control, errors, defaultValue, ...props }) => {
  return (
    <Controller
      name={id}
      control={control}
      defaultValue={defaultValue}
      render={({ onChange, onBlur, value }) => (
        <div>
          <TextArea
            id={id}
            name={id}
            rows={2}
            onChange={onChange}
            onBlur={onBlur}
            maxRows={4}
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
