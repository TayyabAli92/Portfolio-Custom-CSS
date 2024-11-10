import Image from "next/image";
import "../style/page.css";

export default function Home() {
  return (
    <div className="page-box">
      <div className="about-content-box">
        <div className="home-image-container">
          <Image
            className="main-image"
            src="/tayyab.png"
            alt="Profile-pic"
            width={300}
            height={300}
          />
        </div>
        
        <div className="text-container">
          <h1>Hi, I'm Tayyab</h1>
          <h2>Web Developer</h2>
          <p>I am a passionate web developer and 
            <br />
            Here, you can explore my expertise and creative projects.</p>
        </div>
      </div>
    </div>
  );
}
