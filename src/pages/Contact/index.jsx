import styles from "./contact.module.scss";
import Form from "./components/Form/Form";
import IconsBox from "./components/IconsBox/IconsBox";
import ContactAddress from "./components/ContactAddress/ContactAddress";
// import contactImage from "../../assets/contact-page-image-mobile.jpg";
import imageUrl from "../../assets/contact-page-image-desktop.jpg";

function Contact() {
  return (
    <>
      <article className={styles.contact}>
        <div>
          <h2>Contact Us</h2>
          <p>
            At Nyeusi Interior Design House, we&#39;re here to help you realize
            your vision of dark luxurious interiors. Whether you have questions,
            need to discuss your project, or simply want to connect with us,
            we&#39;re just a message or call away.
          </p>
        </div>
        <div>
          <ContactAddress />
          <IconsBox />
        </div>
      </article>
      <Form />
      <div className={styles.img}>
        <img src={imageUrl} alt="" />
      </div>
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
