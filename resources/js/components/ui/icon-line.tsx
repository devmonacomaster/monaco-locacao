type IconProps = {
    className?: string;
  };

  function SectionLine({ className = "" }: IconProps) {
    return (
      <img src="/images/line-section.svg" className={`h-4 ${className}`} />
    );
  }

  export default SectionLine;
