import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Modification } from '../../interfaces/Modification';

const ModificationSelector: React.FC<{
  modifications: any[];
  modificationValue: string;
  handleModificationChange: (e: any, value: any) => void;
}> = ({ modifications, modificationValue, handleModificationChange }) => {
  return (
    <>
      <RadioGroup name='modification' value={modificationValue} onChange={handleModificationChange}>
        {modifications.map((modification: Modification) => (
          <>
            <FormControlLabel
              value={modification.id.toString()}
              control={<Radio required color='primary' id={`modificationRadio${modification.id.toString()}`} />}
              label={`${modification.hp} л.с | ${modification.engineCapacity} л.`}
            />
          </>
        ))}
      </RadioGroup>
    </>
  );
};

export default ModificationSelector;
