import "./Header.css";
import trollFace from "../../assets/Troll_Face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} />
      <h1>Meme Generator</h1>
    </header>
  );
}
