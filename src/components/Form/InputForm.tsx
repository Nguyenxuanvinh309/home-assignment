/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller, FieldValues, useController } from "react-hook-form";
import InputComponent from '../Input';
import { InputProps } from "../Input";
import { useTranslation } from "react-i18next";

interface Props {
  name: string;
  control: Control<FieldValues | any>
}

const InputForm = ({
  name,
  size = 'medium',
  label,
  placeholder,
  variant = 'default',
  required = false,
  disabled = false,
  control,
  ...props
} : Props & InputProps) => {
  const { t } = useTranslation();
  const {
    field: { value = '', ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <InputComponent
          { ...field }
          {...props }
          ref={ref}
          value={value}
          size={size}
          label={label}
          placeholder={placeholder}
          variant={variant}
          required={required}
          disabled={disabled}
          error={!!error}
          errorText={error?.message || t('validation:invalidField')}
        />
      )}
    />
  );
};
export default InputForm;
