type IconProps = {
    className?: string;
  };

  function LeftArrow({ className = "" }: IconProps) {
    return (
      <img src="/images/left-arrow.svg" className={`h-4 ${className}`} />
    );
  }

  export default LeftArrow;
