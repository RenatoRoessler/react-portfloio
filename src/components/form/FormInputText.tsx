//import { replaceApostrophe }  from '@dotse-monorepo/shared/utils';

import { TextField, TextFieldProps } from '@mui/material';
import React, { useState } from 'react';
import { Controller, FieldErrors } from 'react-hook-form';
export type FormInputProps = {
  control: any;
  setValue?: any;
  errros?: FieldErrors;
  customHelperText?: string;
  uppercase?: boolean;
  readOnly?: boolean;
} & TextFieldProps;

export const FormInputText = ({
  control,
  customHelperText,
  name,
  uppercase,
  readOnly,
  ...props
}: FormInputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <Controller
      name={name || ''}
      control={control}
      render={({ field, field: { value }, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          helperText={
            error
              ? error.message
              : customHelperText && focus
              ? customHelperText
              : null
          }
          onFocus={() => (customHelperText ? setFocus(true) : null)}
          onBlur={() => (customHelperText ? setTimeout(() => setFocus(false) , 100 ) : null)}
          size="small"
          error={!!error}
          fullWidth
          inputProps={{
            style: uppercase ? { textTransform: 'uppercase' } : {},
            readOnly: readOnly === true,
          }}
          type={props.type ?? 'text'}
        />
      )}
    />
  );
};
