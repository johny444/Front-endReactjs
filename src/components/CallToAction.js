import React from 'react'
import "./CallToAction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode} from "@fortawesome/free-solid-svg-icons";


function CallToAction() {
    return (
        <div className="cta-bg" id="calltoaction">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                     <FontAwesomeIcon icon={faCode} className="faCode" />
                         <h2>We're backend dev team</h2>
                         <p> đang tìm kiếm một trưởng nhóm Phụ trợ, người sẽ lãnh đạo nhóm cốt lõi thuộc nhóm Ứng dụng và có động lực để kết hợp nghệ thuật thiết kế với nghệ thuật lập trình.</p>
                         <a href="#" className="cta-btn">get to know us</a>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;
