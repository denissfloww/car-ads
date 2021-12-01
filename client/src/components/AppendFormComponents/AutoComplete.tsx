import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

const AppendInputAutoComplete: React.FC<{
  options: any[];
  optionLabel: string;
  value: string;
  handleChange: (e: any, value: any) => void;
  id: string;
}> = ({ options, optionLabel, value, handleChange, id }) => {
  return (
    <>
      <Autocomplete
        options={options}
        id={id}
        getOptionLabel={option => option.name || option.toString()}
        getOptionSelected={(option, value) => option === value}
        value={value}
        disableClearable
        onChange={handleChange}
        renderInput={params => <TextField {...params} required={true} label={optionLabel} variant='outlined' />}
      />
    </>
  );
};

export default AppendInputAutoComplete;
