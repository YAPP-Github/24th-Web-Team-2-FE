interface ChipProps {
  /**
   * text to display
   */
  text: string;
  /**
   * isActivated
   */
  isActivated?: boolean;
}

export const Chip = ({ text, isActivated = true }: ChipProps) => {
  return (
    <span className={`${isActivated ? 'border-black' : 'border-darkgrey'} px-2 border rounded-3xl text-caption w-fit`}>
      {text}
    </span>
  );
};
