import React from 'react'
import './Portfolio.css'
import pro1 from '../../Img/1.png'
import pro2 from '../../Img/2.png'
import pro3 from '../../Img/3.png'
import pro4 from '../../Img/4.png'

function Portfolio() {
  return (
    <div className='port-container'>
      <h1>ผลงาน (Mini Project)</h1>
      <div className="all-card">
        <div className="card-port">
          <div className="image">
            <img src={pro1} alt="" />
          </div>
          <div className="content">
            <span className="title">
              โปรแแกรมคำนวณรายรับ-รายจ่าย
            </span>
            <p className="desc">
              เป็นโปรเเกรมแรกที่ได้เรียนหรือศึกษาจากใน Youtube ส่วนของ React และได้ทำ mini project คือ โปรแแกรมคำนวณรายรับ-รายจ่าย Credit.KongRuksiam
            </p>
            <a className="action-github" href="https://github.com/kanchalit63/Learning-First-React" target='blank'>
              GitHub
            </a>
            <a className="action" href="https://kanchalit63.github.io/Learning-First-React/" target='blank'>
              Demo
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="card-port">
          <div className="image">
            <img src={pro2} alt="" />
          </div>
          <div className="content">
            <span className="title">
              React-Unsplash-API
            </span>
            <p className="desc">
              เป็นการศึกษาการใช้งานระหว่างตัวของหน้าบ้านที่ร้องขอ API จาก Unsplash มาใช้งานเพื่อแสดงผลลัพธ์ที่ได้ออกมาเมื่อกรอก Keyword เข้า Input ไป
            </p>

            <a className="action-github" href="https://github.com/kanchalit63/React-unsplash-api" target='blank'>
              GitHub
            </a>

            <a className="action" href="https://kanchalit63.github.io/React-unsplash-api/" target='blank'>
              Demo
              <span aria-hidden="true">
                →
              </span>
            </a>

          </div>
        </div>
        <div className="card-port">
          <div className="image">
            <img src={pro3} alt="" />
          </div>
          <div className="content">
            <span className="title">
              React-Todo-List
            </span>

            <p className="desc">
              เป็นการศึกษาการสร้าง โดยใช้ React Hook มาใช้งานเพื่อเก็บค่าและนำมาแสดงผล รวมถึง Action ในการทำงานอีกด้วย โดยสามารถทำงานได้ด้วยคือ การสร้าง ลบ แก้ไข และAction Complete
            </p>
            <a className="action-github" href="https://github.com/kanchalit63/React-Todo-List" target='blank'>
              GitHub
            </a>
            <a className="action" href="https://kanchalit63.github.io/React-Todo-List/" target='blank'>
              Demo
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="card-port">
          <div className="image">
            <img src={pro4} alt="" />
          </div>
          <div className="content">
            <span className="title">
              React-Weather-Api
            </span>

            <p className="desc">
              เป็นการศึกษาการใช้งานระหว่างตัวของหน้าบ้านที่ร้องขอ API จาก Weather-Api โดยเมื่อมีการกรอกชื่อเมืองหรือจังหวัดเข้าในตัวของ Input จะทำการแสดงผล รายละเอียดของสภาพอากาศออกมา
            </p>
            <a className="action-github" href="https://github.com/kanchalit63/React-Weather-App" target='blank'>
              GitHub
            </a>
            <a className="action" href="https://kanchalit63.github.io/React-Weather-App/" target='blank'>
              Demo
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio