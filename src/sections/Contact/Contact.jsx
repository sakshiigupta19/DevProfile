import  { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a13b2295-4918-4a31-8b12-118991ccc3ee");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.hiddenLabel}>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.hiddenLabel}>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.hiddenLabel}>
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className={`${styles.hover} ${styles.btn}`} type="submit" value="Submit" />
      </form>
      {result && <p className={styles.resultMessage}>{result}</p>}
    </section>
  );
}

export default Contact;
