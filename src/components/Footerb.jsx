import "./footerb.css";

const FooterB = () => {
  return (
    <div className="footer-banner">
      <div className="footer-banner-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="132"
          width="93"
          viewBox="0 0 93 132"
        >
          <title>Illustration of an envelope with a picture</title>
          <defs>
            <path
              d="M0 18.87l14.5-13.1 12.74 12.58 5.8-5.87 12.6 12.35H66V0H0z"
              id="a"
            ></path>
          </defs>
          <g fillRule="evenodd" fill="none">
            <path
              opacity=".2"
              d="M1.97 92.52a45.4 45.4 0 0 1-.08-19.96c6.3-30.16 39.57-46.5 63.65-39.36.59.18 1.17.37 1.74.57 11.04 3.93 19.79 12.94 23.24 25.58 4.12 15.1.61 32.74-7.78 46.1-11.61 18.48-28.67 30.5-47.03 24.74-13.85-4.34-29.93-21.66-33.74-37.67z"
              fill="#02A5E8"
            ></path>
            <path
              strokeWidth="4"
              d="M14.45 60.15V2h66v58.27l3.53 2.93a6 6 0 0 1 4.47 5.8v46a6 6 0 0 1-6 6h-70a6 6 0 0 1-6-6V69a6 6 0 0 1 4.17-5.72l3.83-3.13z"
              stroke="#53585C"
            ></path>
            <path
              strokeWidth="4"
              d="M14.45 2h66v71l-33 29.63-33-29.63zm0 34.5h66m-59 8H73.4m-51.95 8H63.4"
              stroke="#53585C"
            ></path>
            <path
              strokeWidth="4"
              d="M23.45 62h7v7h-7zm12 0H73.4m-37.95 8h11m3 0H73.4m-37.95 8h20m-16 8h17m2-8h6"
              stroke="#53585C"
            ></path>
            <path
              strokeWidth="4"
              strokeLinecap="round"
              d="M14.79 72.89l32.55 29.74 32.79-29.74"
              stroke="#53585C"
            ></path>
            <path
              strokeWidth="4"
              strokeLinecap="round"
              d="M14.79 108.74l19.6-17.91 12.95 11.8 13.16-11.7 19.63 17.81"
              stroke="#53585C"
            ></path>
            <path
              strokeWidth="4"
              d="M14.45 22.87l14.5-13.1 12.74 12.58 5.8-5.87 12.59 12.35h20.37"
              stroke="#53585C"
            ></path>
            <g transform="translate(14.45 4)">
              <mask id="b" fill="#fff">
                <use href="#a"></use>
              </mask>
              <circle
                strokeWidth="4"
                mask="url(#b)"
                cy="12"
                cx="41"
                stroke="#53585C"
                r="8"
              ></circle>
            </g>
          </g>
        </svg>
        <div className="footer-banner-header-info">
          <h4>Still searching for that perfect trip?</h4>
          <p>Get weekly inspiration delivered right to your inbox!</p>
        </div>
      </div>
      <div className="footer-banner-header-input">
        <form id="footer-subscribe">
          <label htmlFor="subscribe-to-newsletter">Your email address</label>
          <div className="footer-subscribe-form-group">
            <div className="field-and-sublabel ">
              <input
                data-source="footer"
                placeholder="name@example.com"
                id="subscribe-to-newsletter"
                className="form-control"
                name="email"
                type="email"
                size={40}
              />
            </div>
            <input
              type="submit"
              value="Subscribe"
              className="subscribe-footer-btn"
            />
          </div>
          <div className="subscribe-form-message"></div>
        </form>
        <p className="hint">
          We respect your privacy. We will not publish or share your email
          address in any way.
        </p>
      </div>
    </div>
  );
};

export default FooterB;
