import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import {
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

import { fetchStocks } from '../../util/stock_api_util';

const NoOptionsMessage = props =>
  <MenuItem
		selected={false}
		component="div"
		style={{ fontWeight: 400 }}
		{...props.innerProps}
	>
		{props.children}
	</MenuItem>

const inputComponent = ({ inputRef, ...props }) =>
	<div style={{ display: 'flex', padding: '8px 0px' }} ref={inputRef} {...props} />

const Control = props =>
	<TextField
		fullWidth
		InputProps={{
			inputComponent,
			inputProps: {
				inputRef: props.innerRef,
				children: props.children,
				...props.innerProps,
			},
		}}
		{...props.selectProps.textFieldProps}
	/>

const Option = props =>
  <MenuItem
		buttonRef={props.innerRef}
		selected={props.isFocused}
		component="div"
		style={{
			fontWeight: props.isSelected ? 500 : 400,
		}}
		{...props.innerProps}
	>
		{props.children}
	</MenuItem>

const Placeholder = props =>
  <Typography
    color="textSecondary"
    style={{
      position: 'absolute',
      left: 2,
      bottom: 2,
      fontSize: 16,
    }}
    {...props.innerProps}
  >
    {props.children}
  </Typography>

const SingleValue = props =>
  <Typography
    {...props.innerProps}
  >
		{props.children}
  </Typography>

const ValueContainer = props =>
	<div 
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
    }}
   >
    {props.children}
  </div>

const Menu = props =>
  <Paper 
    square 
    style={{
      position: 'absolute',
      zIndex: 1,
      left: 0,
      right: 0,
    }}
    {...props.innerProps}
  >
    {props.children}
  </Paper>

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

export default class SymbolSelect extends Component {
  getOptions = inputValue =>
    fetchStocks(inputValue)
      .then(stocks =>
        stocks.map(stock => ({
          value: stock.symbol,
          label: stock.symbol,
          name: stock.name,
        }))
      );

  render() {
    return (
      <AsyncSelect 
        textFieldProps={{
          label: 'Symbol',
          InputLabelProps: {
            shrink: true,
            required: true,
          }
        }}
        cacheOptions
        defaultOptions={[]}
        loadOptions={this.getOptions}
        components={components}
        placeholder="Search by symbol"
        {...this.props}
        isClearable
        backspaceRemovesValue
        noOptionsMessage={() => "No symbols found"}
      />
    );
  }
}
