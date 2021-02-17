import React, { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { InputText, InputTextArea } from "application/components";
import { Button } from "@react-md/button";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
}

const formSchema = object().shape({
  firstName: string()
    .max(255, "Must be exactly 255 digits")
    .required("Please write down your first name"),
  lastName: string()
    .max(255, "Must be exactly 255 digits")
    .required("Please write down your last name"),
  email: string()
    .max(255, "Must be exactly 255 digits")
    .email("Invalid email")
    .required("Don’t forget to tell us what your email address is"),
  subject: string()
    .max(500, "Must be exactly 255 digits")
    .required("Don’t forget to write something to use!"),
});
const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
};

type ContactFormProps = {
  handleSubmitForm: ()=> void;
};

const ContactForm: FC<ContactFormProps> = ({handleSubmitForm}) => {
  const {
    control,
    handleSubmit,
    errors: formErrors,
    formState: { dirtyFields },
  } = useForm<IFormInput>({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <InputText
        id="firstName"
        label="first name*"
        control={control}
        errors={formErrors}
      />
      <InputText
        id="lastName"
        label="last name*"
        control={control}
        errors={formErrors}
      />
      <InputText
        id="email"
        label="Email*"
        type="email"
        control={control}
        errors={formErrors}
      />
      <InputTextArea
        id="subject"
        label="Subject*"
        control={control}
        errors={formErrors}
      />
      <Button
        id="form-button"
        theme="primary"
        type="submit"
        themeType="contained"
        disabled={Object.entries(dirtyFields).length < 4}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
