import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { Generation } from '../../interfaces/Generation';

const GenerationSelector: React.FC<{ generations: any[]; handleGenerationChange: (e: any, value: any) => void }> = ({
  generations,
  handleGenerationChange,
}) => {
  return (
    <>
      <GridList>
        {generations.map((item: Generation) => (
          <div>
            <input
              required={true}
              type='radio'
              name='generation'
              onChange={e => {
                handleGenerationChange(e, e.target.value);
              }}
              value={item.id}
              id={item.name}
              className='input-hidden'
            />
            <label htmlFor={item.name}>
              <GridListTile className='generation-image-div'>
                <img src={item.image} height={150} width={200} />
                <GridListTileBar title={item.name} subtitle={item.name} />
              </GridListTile>
            </label>
          </div>
        ))}
      </GridList>
    </>
  );
};

export default GenerationSelector;
