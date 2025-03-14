type IconProps = {
    className?: string;
  };

  function ArrowHeader({ className = "" }: IconProps) {
    return (
      <img src="/images/arrow_header.svg" className={`h-4 ${className}`} />
    );
  }

  export default ArrowHeader;
