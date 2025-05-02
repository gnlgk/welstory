import { useEffect, useState } from "react"
import "../../assets/sass/Section1.scss"

const Section1 = () => {
    const [textActive, setTextActive] = useState(false);
    const [showCircle, setShowCircle] = useState(false);
    const [bgIdx, setBgIdx] = useState(0);
    
    const bgImgs = ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];
    
    useEffect(() => {
        const timer = setTimeout(() => setTextActive(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const showEffect = () => { 
        setShowCircle(true);
        setTimeout(() => {
            setBgIdx(prev => (prev + 1) % bgImgs.length);
        }, 500);

         setTimeout(() => {
             setShowCircle(false);
        }, 2000);
    }
    
  return (
    <div className="section1">
          { 
              bgImgs.map((img, idx) => (
                  <img key={idx} src={img} alt={`img${idx}`}
                      className={`bgimg ${bgIdx === idx ? "on" : ""}`} />
                  
            ))  
          }
          <div className={`textbox ${textActive ? "on" : ""}`}>
              <h1>환영합니다 나의 타입스크립트 세계로</h1>
             <button onClick={showEffect}>다음이미지</button>
          </div>
          { 
              showCircle && <div className="bigCircle"/>
          }
    </div>
  )
}

export default Section1
