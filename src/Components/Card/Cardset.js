import React, {useState} from 'react'
import Card from './Card'
import Image from '../../Images/card_image.jpg'
import '../Card/css/cardset.css';


function Cardset() {

    const [transformX,setTransform] =  useState(0);
    function movetoprev(event) {
        event.preventDefault(); 
        if(transformX === 0 )
            return;
        setTransform(transformX+100);
    }

    function movetonext(event) {
        event.preventDefault();
        if(transformX === -200)
            return; 
        setTransform(transformX-100);
    }

    return (
        <>
            <div className="container headerContainer">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="my_container">
                            <div className="Live">
                                <i className="fas fa-circle"></i>
                                <span className="Circle"></span><p>Live</p>
                            </div>

                            <p className="heading">
                                Upcoming Live Coaching
                            </p>

                            <form className="form-buttons">
                                <button type="prev"  className="btn-left" onClick={movetoprev} > <i className="fas fa-chevron-left"></i>  </button>
                                <button type="next"  className="btn-right" onClick={movetonext}><i className="fas fa-chevron-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="move">
                <div className="container mycontent">
                    <div className="my_row" style={{transform:`translateX(${transformX}%)`}}>
                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='Batch closes in 1 days' Title='UPSC IAS GS 2022 Foundation Live Coachin...'
                                youtube_content='380 + live classes' bookmark_content='1500 + Questions'
                                notes='200 + notes' backcolor={'green-gradient'} />
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='Batch closes in 3 days' Title='Civil Assistant Engineer Live Coaching Batch 2'
                                youtube_content='230 + live classes' bookmark_content='5000 + Questions'
                                notes=' 85 + notes' backcolor={'green-gradient'} />
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='Batch closes in 6 days' Title='BPSC Foundation Live Coaching (Pre + Main)'
                                youtube_content='400 + live classes' bookmark_content='2000 + Questions'
                                notes='300 + notes' backcolor={'green-gradient'} />
                        </div>
                        
                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='5 days left to enroll' Title='IBPS PO & SBI Live Coaching in English Batc...'
                                youtube_content='240 + live classes' bookmark_content='9000 + Questions'
                                notes='120 + notes' />
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='Start in 15 days' Title='Civil Junior Engineer live Coaching Batch 2'
                                youtube_content='200 + live classes' bookmark_content='5000 + Questions'
                                notes='80 + notes' />
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='Batch closes in 2 days' Title='UPSC CDS - 2 2021 Live Coaching Batch 3'
                                youtube_content='220 + live classes' bookmark_content='6000 + Questions'
                                notes='100 + notes' backcolor={'green-gradient'} />
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='5 days left to enroll' Title='IBPS PO & SBI Live Coaching in English Batc...'
                                youtube_content='240 + live classes' bookmark_content='9000 + Questions'
                                notes='120 + notes' />
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='Start in 15 days' Title='Civil Junior Engineer live Coaching Batch 2'
                                youtube_content='200 + live classes' bookmark_content='5000 + Questions'
                                notes='80 + notes' />
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-4">
                            <Card Image={Image} header='Batch closes in 2 days' Title='UPSC CDS - 2 2021 Live Coaching Batch 3'
                                youtube_content='220 + live classes' bookmark_content='6000 + Questions'
                                notes='100 + notes' backcolor={'green-gradient'} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Cardset
