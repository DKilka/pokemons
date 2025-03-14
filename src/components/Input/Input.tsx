import { UseFormRegister } from "react-hook-form";
import { RegisterFileds } from "../../types/RegisterFileds";
import { Form } from "../../types/Form";

interface InputProps {
  labelFor: string;
  title: string;
  styles?: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  registerFileds?: RegisterFileds;
  register: UseFormRegister<Form>;
  registerValue: string;
}

const Input = ({
  labelFor,
  title,
  styles,
  type = "text",
  placeholder,
  errorMessage,
  registerFileds,
  registerValue,
  register,
}: InputProps) => {
  return (
    <label htmlFor={labelFor}>
      <h2 className="text-2xl mb-1 ml-1">{title}</h2>
      <input
        className={`bg-gray-400 rounded-lg pl-2 outline-none w-3xs h-8 ${styles}`}
        type={type}
        id={labelFor}
        placeholder={placeholder}
        {...register(registerValue === "name" ? "name" : "surname", {
          required: registerFileds?.required,
          minLength: registerFileds?.minLength,
          maxLength: registerFileds?.maxLength,
          pattern: {
            value: registerFileds?.pattern.value ?? /^[A-Za-z]+$/,
            message: registerFileds?.pattern.message ?? "",
          },
        })}
      />
      {errorMessage && (
        <p className="text-red-400 text-sm ml-1">{errorMessage}</p>
      )}
    </label>
  );
};

export default Input;
