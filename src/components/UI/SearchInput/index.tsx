import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import { useDebounceCallback } from '@/hooks/index';

interface SearchInputProps {
  onSearch: (value: string) => void;
  debounceTime?: number;
  value: string;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, debounceTime = 300, value, placeholder = "Search" }) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedSearch = useDebounceCallback(onSearch, debounceTime);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    debouncedSearch(newValue);
  };

  const handleClear = () => {
    setInputValue('');
    debouncedSearch('');
  };

  return (
    <TextField
      label={placeholder}
      variant="outlined"
      fullWidth
      value={inputValue}
      onChange={handleChange}
      InputProps={{
        endAdornment: inputValue && (
          <InputAdornment position="end">
            <IconButton onClick={handleClear} edge="end">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
