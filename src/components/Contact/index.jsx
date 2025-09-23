import styles from "./Contact.module.css";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error));
  };

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className={styles.contactForm}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input placeholder="Name" required />
        <input placeholder="Email" type="email" required />
        <textarea
          placeholder="Message"
          rows={7}
          maxlength="750"
          required
        ></textarea>
        <button>Send Message</button>
      </form>
    </>
  );
}
