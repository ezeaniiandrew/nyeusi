/* eslint-disable react/prop-types */
import {
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
} from "react-aria-components";
import styles from "./text-input.module.scss";
import { FaAsterisk } from "react-icons/fa";

function TextInput({ label, type, isRequired }) {
  console.log(isRequired);
  return (
    <TextField type={type} isRequired={isRequired}>
      <Label className={styles.label}>
        {label}
        {isRequired ? <FaAsterisk /> : ""}
      </Label>
      {!type ? (
        <TextArea placeholder={`Type your ${label}`} />
      ) : (
        <Input placeholder={`Type your ${label}`} />
      )}
      <FieldError />
    </TextField>
  );
}

export default TextInput;
