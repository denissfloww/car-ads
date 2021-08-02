import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import { useAppendPageStyles } from '../../styles/muiStyles';

interface OptionList {
  title: string;
  imageUrl: string;
}

const AutoComplete: React.FC<{ headerText: string; onChange: () => void; optionList: OptionList[] }> = ({
  headerText,
  onChange,
  optionList,
}) => {
  return (
    <>
      <h3>{headerText}</h3>
      <Autocomplete
        id='combo-box-demo'
        options={optionList}
        getOptionLabel={option => option.title}
        onChange={onChange}
        onInputChange={onChange}
        style={{ width: '100%' }}
        disableClearable={true}
        renderInput={params => <TextField {...params} label={headerText} variant='outlined' />}
        renderOption={options => {
          return (
            <>
              <img style={{ width: '40px', height: '40px' }} src={options.imageUrl} alt='' />
              {options.title}
            </>
          );
        }}
      />
    </>
  );
};

export default AutoComplete;
