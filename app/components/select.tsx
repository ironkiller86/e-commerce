import Select from 'react-select';

const options = [
  { value: '', label: 'Tutte' },
  { value: '1', label: 'Vestiti' },
  { value: '2', label: 'Elettronica' },
  { value: '3', label: 'Mobili' },
  { value: '4', label: 'Scarpe' },
  { value: '5', label: 'Varie' },
  { value: '6', label: 'Piante' },
];

export default function SelectComponent({
  onChange,
}: {
  onChange: (option: { value: string; label: string }) => void;
}) {
  return (
    <Select
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
          /*  backgroundColor: state.is ? '#EDEDED' : 'white', */

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
      defaultValue={{ value: '', label: 'Tutte' }}
      onChange={(option: { value: string; label: string }) => {
        onChange(option);
      }}
      className="w-[184px]"
    />
  );
}
