import React from 'react'
import './About.css'
import About1 from '../../Img/About_Full.jpg'
import html from '../../Img/html-icon.png'
import css from '../../Img/Css-icon.png'
import js from '../../Img/Js-icon.png'
import react from '../../Img/React-icon.png'
import node from '../../Img/Node-icon.png'



function About() {
    return (
        <div className='About-contaienr'>
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={About1} alt="" className='about-img' />
                </div>
            </div>
            <div className="about-right">
                <h1 className='about-title'>เกี่ยวกับผม</h1>
                <p className='about-sub'>สวัสดีครับ ผมชื่อ นาย กานต์ชลิต บางขะกูล ชื่อเล่น บิว อายุ 22 ปี ตอนนี้ศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนาเชียงใหม่ คณะวิศวกรรมคอมพิวเตอร์ชั้นปีที 4 </p>
                <h1 className='about-title'>ความสนใจ</h1>
                <p className='about-desc'>
                    เนื่องจากตอนนี้ผมได้ศึกษาและพัฒนาระบบในส่วนของ Front-end โดยใช้ React เป็นระยะเวลา 1 เดือน ซึ่งผมเองสนใจในส่วนของการทำงานของระบบหน้าบ้านเป็นอย่างมาก โดยผมต้องการศึกษาและพัฒนาทักษะในส่วนของระบบหน้าบ้านเพิ่มเติมและนำความรู้ที่ได้เรียนรู้มาพัฒนาฝีมือในการทำงานของตนเอง ณ ปัจจุบันให้ดียิ่งขึ้นรวมไปถึงในอนาคต
                </p>
                <h4 className='about-title'>สกิลหรือความสามารถ</h4>
                <div className="img-skill">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    <img src={node} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About