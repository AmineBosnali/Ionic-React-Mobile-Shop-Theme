export interface CategoryComponentProps {
  imageSrc: string;
  overlayText: string;
  brandName: string;
  bottomText?: string;
  color?: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryComponentProps> = ({
  imageSrc,
  overlayText,
  brandName,
  bottomText,
  color,
  onClick,
}) => (
  <div className="categoryComponent" onClick={onClick}>
    <img src={imageSrc} alt={brandName} className="bgImage" />
    <div
      className="rightOverlay"
      style={{ background: color || "rgba(120, 76, 0, 0.763)" }}
    >
      <span className="overlayText">{overlayText}</span>
    </div>
    <div className="leftBox">
      <span className="brandText">{brandName}</span>
      {bottomText && <span className="bottomText">{bottomText}</span>}
    </div>
  </div>
);

export default CategoryCard;
