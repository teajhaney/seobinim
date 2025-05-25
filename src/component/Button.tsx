const Button = ({ onclick, className, children, disabled }: buttonProp) => {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={`${className} bg-secondary`}>
      {children}
    </button>
  );
};

export default Button;
