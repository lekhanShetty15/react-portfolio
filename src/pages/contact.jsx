const Contact =()=>{


    return(
        <div className="contact-main">
            <div className="titleContact">//contact_me</div>
            <div className="conatctDesc">I’m looking forward to connecting with you. Don’t hesitate to reach out to me for a meeting today.</div>
            <div className="email">
                <div className="emailLogo"><i class="fa-regular fa-envelope emailLog"></i></div>
                <div className="emailText">lekhanshetty49@gmail.com</div>
            </div>
            <input className="nameInpt" type="text" placeholder="_name"/>
            <input className="emailInpt" type="email" placeholder="_email"/>
            <textarea className="textdesc" placeholder="_message"></textarea>
            <button className="submitBtnlast">submit-message</button>

            
        </div>
    )
}


export default Contact