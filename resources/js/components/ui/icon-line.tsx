type IconProps = {
    className?: string;
  };

  function SectionLine({ className = "" }: IconProps) {
    return (
      <img src="/images/line-section.svg" className={`${className}`} />
    );
  }

  export default SectionLine;
