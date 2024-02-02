import { StyledTextarea } from "./Textarea.styles";

interface IStyledTextarea {
  name: string;
  placeholder: string;
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<IStyledTextarea> = ({
  name,
  placeholder,
  id,
  value,
  onChange,
}) => {
  return (
    <StyledTextarea
      name={name}
      placeholder={placeholder}
      id={id || name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
