import TextInput from "@/components/TextInput/TextInput";
import { Form as AriaForm } from "react-aria-components";
import Button from "@/components/Button/Button";
import styles from "./form.module.scss";

function Form() {
  return (
    <AriaForm className={styles.form}>
      <TextInput type="text" label="name" />
      <TextInput type="email" label="email" />
      <TextInput label="message" />
      <Button>Send your message</Button>
    </AriaForm>
  );
}

export default Form;
