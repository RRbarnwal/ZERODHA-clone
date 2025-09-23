import React from "react";

function Universe() {
  const imageStyle = {
    width: "200px",
    height: "100px", 
    objectFit: "contain"
  };

  const partners = [
    {
      img: "media/Images/zerodhafundhouse.png",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save your goals."
    },
    {
      img: "media/Images/sensibull-logo.svg",
      desc: "Options trading platform that lets you creaye strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
    },
    {
      img: "media/Images/tijori.svg",
      desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
    },
    {
      img: "media/Images/streak-logo.png",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding."
    },
    {
      img: "media/Images/smallcaseLogo.png",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
    },
    {
      img: "media/Images/ditto-logo.png",
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling."
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mb-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row justify-content-center">
          {partners.map((partner, index) => (
            <div key={index} className="col-md-4 p-3 mt-4">
              <div className="card h-100 border-0">
                <div className="card-body">
                  <img
                    src={partner.img}
                    alt={`${partner.desc} logo`}
                    style={imageStyle}
                    className="mb-3"
                  />
                  <p className="text-muted small">{partner.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <button
            className="btn btn-primary fs-5 px-4 py-2"
            style={{ width: "200px" }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;