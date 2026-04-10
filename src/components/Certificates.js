import cert1Img from "../assets/cert1.jpg";
import cert2Img from "../assets/cert2.jpg";
import cert3Img from "../assets/cert3.jpg";
import cert4Img from "../assets/cert4.jpg";
import cert1PDF from "../assets/cert1PDF.pdf";
import cert2PDF from "../assets/cert2PDF.pdf";
import cert3PDF from "../assets/cert3PDF.pdf";
import cert4PDF from "../assets/cert4PDF.pdf";

export default function Certificates() {
  const certificates = [
    { img: cert1Img, pdf: cert1PDF },
    { img: cert2Img, pdf: cert2PDF },
    { img: cert3Img, pdf: cert3PDF },
    { img: cert4Img, pdf: cert4PDF },
  ];

  return (
    <section id="certificates">
      <h1 className="gradient-text">Certificates </h1>

      <div className="cert-container">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.pdf}
            download 
            className="cert-card"
          >
            <img src={cert.img} alt="certificate" />
          </a>
        ))}
      </div>
    </section>
  );
}
