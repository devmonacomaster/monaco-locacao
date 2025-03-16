type IconProps = {
    className?: string;
  };

  function FacebookLogo({ className = "" }: IconProps) {
    return (
      <img src="/images/facebook.svg" alt="Facebook Logo" className={`h-4 ${className}`} />
    );
  }

  export default FacebookLogo;
