import styles from "./contact.module.scss";

function Contact() {
  return (
    <>
      <article className={styles.col_1}>
        <div>
          <h2>Contact Us</h2>
          <p>
            At Nyeusi Interior Design House, we're here to help you realize your
            vision of dark luxurious interiors. Whether you have questions, need
            to discuss your project, or simply want to connect with us, we're
            just a message or call away.
          </p>
        </div>
        <div>
          <ul>
            <li>+254712345678</li>
            <li>nyeusiinteriordesign@gmail.com</li>
            <li>tom mboya street, nairobi, kenya.</li>
          </ul>
          <div>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
        </div>
      </article>
      <div className="col2">form</div>
      <div>image</div>
      <p>
        Feel free to connect with Nyeusi Interior Design House for inquiries,
        collaborations, or to share your vision for your dark luxurious
        interiors. We eagerly anticipate the opportunity to bring your dreams to
        life.
      </p>
    </>
  );
}

export default Contact;
