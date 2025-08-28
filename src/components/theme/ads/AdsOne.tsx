export interface AdsOneProps {
  imageSrc: string;
  alt?: string;
  onClick?: () => void;
}

const AdsOne: React.FC<AdsOneProps> = ({
  imageSrc,
  alt = "Advertisement",
  onClick,
}) => (
  <div className="adsOne" onClick={onClick}>
    <img src={imageSrc} alt={alt} />
  </div>
);

export default AdsOne;
