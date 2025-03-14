type IconProps = {
    className?: string;
  };

  function InstagramLogo({ className = "" }: IconProps) {
    return (
      <img src="/images/instagram.svg" alt="Logo do instagram" className={`h-4 ${className}`} />
    );
  }

  export default InstagramLogo;
