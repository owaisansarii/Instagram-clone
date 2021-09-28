import "./bottomNav.css";
const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <i class="fas fa-home"></i>
      <i class="fas fa-search"></i>
      <div className="plus-icon">
        <i class="fas fa-plus"></i>
      </div>
      <i class="fas fa-heart"></i>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/Vector_Face_wearing_Spectacles.png"
        alt=""
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          display: "block",
          position: "relative",
        }}
      />
    </div>
  );
};
export default BottomNav;
