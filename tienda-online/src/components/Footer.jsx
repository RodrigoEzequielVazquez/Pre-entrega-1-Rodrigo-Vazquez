import React from "react";

const Footer = () => {
    return(
        <div className="container-fluid bg-dark w">
            <div>
                <div>
                    <div className="col-md-4 ">
                        <img className="w-25" src={"images/wendy-logo.png"} alt="logo wendy" />

                    </div>
                    <div className="col-md-8 d-flex justify-content-end">
                        <p>
                            <a href={"https://twitter.com/Wendys"} target={"_blank"} className="me-3">
                                <img src={"images/signo-de-twitter.png"} alt="" width={28} />
                            </a>
                            <a href={"https://www.facebook.com/wendys/"} target={"_blank"} className="me-3">
                                <img src={"images/facebook (3).png"} alt="" width={28} />
                            </a>
                            <a href={"https://www.instagram.com/wendys/"} target={"_blank"} className="me-3">
                                <img src={"images/instagram (3).png"} alt="" width={28} />
                            </a>
                            <a href={"https://discord.com/invite/wendys"} target={"_blank"} className="me-3">
                                <img src={"images/discord.png"} alt="" width={28} />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;