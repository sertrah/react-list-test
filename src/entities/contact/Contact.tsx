import React, { FC } from "react";
import ContactForm from "./ContactForm";
import { useNotification } from "application/hooks";

import "./Contact.scss";

const Contact: FC = () => {
  const notify = useNotification();
  
  const handleSubmit = () => {
    notify.success({
      title: "Contact",
      message:  "In good time, we will contact you soon"
    });
  }
  return (
    <section id="contact">
        <ContactForm handleSubmitForm={handleSubmit}/>
    </section>
  )
};

export default Contact;
