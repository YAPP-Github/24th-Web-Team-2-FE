interface TextStyleProps {
  /**
   * text to display
   */
  text: string;
  /**
   * TextStyle type
   */
  type?: 'h1' | 'h2' | 'body1' | 'body2' | 'body3' | 'caption' | 'btn1';
  /**
   * TextStyle color
   */
  color?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const TextStyle = ({ text, type = 'body1', color = 'blue' }: TextStyleProps) => {
  return <p className={`text-${type} text-${color}`}>{text}</p>;
};
