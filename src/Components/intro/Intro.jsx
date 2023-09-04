import React from 'react'
import './Intro.css'
import Profile from '../../Img/Profile.png'
import Profile2 from '../../Img/Profile_2.png'

function Intro() {
    return (
        <div className='intro-container'>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={Profile} alt="" className="intro-img" />

            </div>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is </h2>
                    <h2 className='intro-name'>Kanchalit Bangkhakul</h2>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Student</div>
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Front-end Developer</div>
                        </div>
                    </div>
                    <p className="intro-desc">
                        สวัสดีครับผมเป็นนักศึกษาชั้นปีที่ 4 มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนาเชียงใหม่สาขาวิศวกรรมคอมพิวเตอร์
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Intro