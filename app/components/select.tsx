import SelectComponent from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Select() {
  return (
    <SelectComponent
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          /*   borderColor: state.isFocused ? '#e32118' : '#000000', */
          borderRadius: '4px',
          minHeight: '40px',
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#EDEDED' : 'white',
          color: 'black',
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.is ? '#EDEDED' : 'white',

          color: 'white',
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          color: 'white',
          zIndex: 1,
          backgroundColor: 'white',
          padding: '5px',
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          color: 'lightgray',
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: 'black',
        }),

        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: 'black',
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: 'black',
        }),
      }}
      options={options}
      className="w-[184px]"
    />
  );
}
