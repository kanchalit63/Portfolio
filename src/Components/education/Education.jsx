import React from 'react'
import './Education.css'

function Education() {
    return (
        <div className='education-container'>
            <h1>ประวัติการศึกษา</h1>
            <div className="education-details">
                <div className="edu-left">
                    <div className="card">
                        <div className="card-container">
                            <h4>ระดับประกาศนียบัตรวิชาชีพ ( ปีการศึกษา 2560-2562 )</h4>
                            <p>วิทยาลัยเทคนิคเวียงป่าเป้า สาขาวิชา เทคโนโลยีสารสนเทศ  </p>
                            <p>200 หมู่ 6 ต.ป่างิ้ว อ.เวียงป่าเป้า จ.เชียงราย 57170</p>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="card-container">
                            <h4>ระดับปริญญาตรี ( ปีการศึกษา 2563 - ปัจจุบัน )</h4>
                            <p>มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา สาขาวิชา วิศวะกรรมคอมพิวเตอร์</p>
                            <p>128 ถ.ห้วยแก้ว ต.ช้างเผือก อ.เมือง จ.เชียงใหม่ 50300</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Education