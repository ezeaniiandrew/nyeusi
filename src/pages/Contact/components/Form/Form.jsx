import TextInput from "@/components/TextInput/TextInput";
import { Form as AriaForm } from "react-aria-components";
import Button from "@/components/Button/Button";
import styles from "./form.module.scss";

function Form() {
  return (
    <AriaForm className={styles.form}>
      <TextInput type="text" label="Name" isRequired />
      <TextInput type="email" label="Email" isRequired />
      <TextInput label="message" isRequired />
      <Button>Submit</Button>
    </AriaForm>
  );
}

export default Form;
