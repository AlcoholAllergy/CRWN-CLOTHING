import './form-input.style.scss';

const FormInput = ({ lable, ...otherProps }) => {
  return (
    <div className='group'>
      <input {...otherProps} className='form-input' />
      {lable && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {lable}
        </label>
      )}
    </div>
  );
};

export default FormInput;
