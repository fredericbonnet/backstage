/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, useState } from 'react';
import { BackstageTheme } from '@backstage/theme';
import { Button, makeStyles } from '@material-ui/core';
import { Select } from '../Select';
import { SelectProps } from '../Select/Select';

export type TableFiltersClassKey = 'root' | 'value' | 'heder' | 'filters';

const useFilterStyles = makeStyles<BackstageTheme>(
  theme => ({
    root: {
      height: '100%',
      width: '315px',
      display: 'flex',
      flexDirection: 'column',
      marginRight: theme.spacing(3),
    },
    value: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: '60px',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${theme.palette.grey[500]}`,
    },
    filters: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
  { name: 'BackstageTableFilters' },
);

export type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

export type Filter = {
  type: 'select' | 'multiple-select';
  element: Without<SelectProps, 'onChange'>;
};

export type SelectedFilters = {
  [key: string]: string | string[];
};

type Props = {
  filters: Filter[];
  selectedFilters?: SelectedFilters;
  onChangeFilters: (arg: any) => any;
};

export const Filters = (props: Props) => {
  const classes = useFilterStyles();

  const { onChangeFilters } = props;

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    ...props.selectedFilters,
  });
  const [reset, triggerReset] = useState(false);

  // Trigger re-rendering
  const handleClick = () => {
    setSelectedFilters({});
    triggerReset(el => !el);
  };

  useEffect(() => {
    onChangeFilters(selectedFilters);
  }, [selectedFilters, onChangeFilters]);

  // As material table doesn't provide a way to add a column filter tab we will make our own filter logic
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.value}>Filters</div>
        <Button color="primary" onClick={handleClick}>
          Clear all
        </Button>
      </div>
      <div className={classes.filters}>
        {props.filters?.length &&
          props.filters.map(filter => (
            <Select
              triggerReset={reset}
              key={filter.element.label}
              {...(filter.element as SelectProps)}
              selected={selectedFilters[filter.element.label]}
              onChange={el =>
                setSelectedFilters({
                  ...selectedFilters,
                  [filter.element.label]: el as any,
                })
              }
            />
          ))}
      </div>
    </div>
  );
};
