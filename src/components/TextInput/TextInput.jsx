/* eslint-disable react/prop-types */
import {
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
} from "react-aria-components";
import styles from "./text-input.module.scss";

function TextInput({ label, type }) {
  return (
    <TextField type={type} isRequired>
      <Label className={styles.text_label}>{label}</Label>
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
