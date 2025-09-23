import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  if (submitted) {
    return <p>Thank you for your message! I’ll get back to you soon ✅</p>;
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className={styles.contactForm}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" type="email" required />
      <textarea
        name="message"
        placeholder="Message"
        rows={7}
        maxLength={750}
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
}
