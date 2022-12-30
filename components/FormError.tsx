interface FormErrorProps {
  text: string;
}

const FormError = ({ text }: FormErrorProps) => {
  return <span className="text-red-500 text-xs mt-2">{text}</span>;
};

export default FormError;
