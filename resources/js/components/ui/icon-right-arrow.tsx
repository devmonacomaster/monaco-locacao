type IconProps = {
    className?: string;
  };

  function RightArrow({ className = "" }: IconProps) {
    return (
      <img src="/images/right-arrow.svg" className={`h-4 ${className}`} />
    );
  }

  export default RightArrow;
