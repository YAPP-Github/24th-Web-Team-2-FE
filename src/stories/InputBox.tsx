import CheckIcon from '@/assets/icons/CheckIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import { useEffect, useRef, useState } from 'react';

interface InputBoxProps {
  /**
   * label to display on the upper side of the input box
   */
  label: string;
  /**
   * placeholder text
   */
  placeholder?: string;
  /**
   * value of the input box
   */
  value: string;
  /**
   * change handler
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;
  /**
   * guideline text
   */
  guideLine?: string;
}

/**
 * Usage
 * Wrap the component with a width-height-set-div.
 */
export const InputBox = ({ label, placeholder, value, setValue, guideLine }: InputBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleBlurInput = () => {
    setIsFocused(false);
    setValue(innerValue);
  };

  const handleCloseIconClick = () => {
    if (inputRef.current) {
      setInnerValue('');
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (!guideLine) return;
    //한글,영문 또는 숫자 중 1개 이상을 포함하여 2자 ~ 10자
    const regExp = /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,10}$/;
    setIsValid(regExp.test(innerValue));
  }, [innerValue, guideLine]);
  return (
    <div className='flex flex-col h-full gap-2 w-inputBox'>
      {label && <span className='text-darkgrey text-caption'>{label}</span>}
      <div
        className={`${isFocused ? 'border-bottom-gradient' : 'border-darkgrey'} border-b h-full items-center flex flex-row w-full`}
      >
        <input
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlurInput}
          className={`w-full h-14 text-body2 focus:outline-none`}
          placeholder={placeholder}
          value={innerValue}
          onChange={e => setInnerValue(e.target.value)}
        />
        <CloseIcon
          width={24}
          fill={isValid ? '#000000' : '#C62D32'}
          className='hover:cursor-pointer'
          onClick={handleCloseIconClick}
        />
      </div>
      {guideLine && (
        <div className='flex flex-row justify-between w-full'>
          <span className={`${isValid ? 'text-green' : isFocused ? 'text-red' : 'text-darkgrey'} text-caption`}>
            {guideLine}
          </span>
          {/* TODO: change fixed fill value to css-constant */}
          {isValid && <CheckIcon width={24} fill='#69B012' />}
        </div>
      )}
    </div>
  );
};
