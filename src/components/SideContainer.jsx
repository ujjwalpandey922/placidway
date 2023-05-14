import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SideContainer = () => {
  const [selectedStar, setSelectedStar] = useState(-1);
  const handleRating = (startGiven) => {
    setSelectedStar(startGiven);
  };
  return (
    <>
      <div className="side-links-icons">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path
              d="M9.108 3.243V.552c0-.276.207-.552.552-.552.138 0 .276.069.414.207l4.83 5.382c.207.207.207.483 0 .69l-4.83 5.865c-.207.207-.552.276-.759.069-.138-.069-.207-.276-.207-.414V9.108c-4.209.138-6.9 1.932-8.073 5.52a.519.519 0 01-.483.345H.483C.207 14.904 0 14.697 0 14.421 0 8.211 3.795 3.519 9.108 3.243zm.552 4.83c.276 0 .552.207.552.552v1.725L13.8 6.003l-3.588-4.002v1.794a.544.544 0 01-.552.552c-4.209 0-7.383 2.898-8.28 7.383 1.725-2.484 4.485-3.657 8.28-3.657z"
              fill="#02BF9B"
            ></path>
          </svg>
          <span>Share this listing </span>
        </h2>
        <button>
          <span
            data-share-type="facebook"
            href="https://www.facebook.com/share.php?u=https://www.tripaneer.com/sharing/1gy45vPv6g/7-days-travel-experience-italy"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="17" width="9">
              <path
                d="M5.842 16.941V9.214h2.653l.398-3.012h-3.05V4.279c0-.872.246-1.466 1.526-1.466H9V.117A22.614 22.614 0 006.624 0C4.27 0 2.66 1.404 2.66 3.98v2.222H0v3.012h2.66v7.727h3.182z"
                fill="#4172B8"
              ></path>
            </svg>{" "}
            <span>Facebook</span>
          </span>
        </button>

        <button>
          <span
            data-twitter-hashtags="tripaneer,trip"
            target="_blank"
            data-twitter-handle="tripaneer"
            data-share-type="twitter"
            href="https://twitter.com/intent/tweet?url=https://www.tripaneer.com/sharing/1gy45vPv6g/7-days-travel-experience-italy&amp;text=Love this Travel Experience in Italy that I found on&amp;via=
	
		tripaneer
	
&amp;hashtags=tripaneer,trip"
            className=" twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="18">
              <path
                d="M17.192 1.667c-.636.28-1.314.47-2.028.556A3.558 3.558 0 0016.716.27a7.294 7.294 0 01-2.244.85 3.53 3.53 0 00-6.017 3.217A10 10 0 011.177.656a3.46 3.46 0 00-.478 1.777c0 1.227.624 2.306 1.57 2.94A3.52 3.52 0 01.67 4.93v.043A3.533 3.533 0 003.502 8.44a3.586 3.586 0 01-1.587.06 3.543 3.543 0 003.304 2.453 7.082 7.082 0 01-4.38 1.51c-.28 0-.558-.016-.839-.047C1.571 13.415 3.422 14 5.424 14 11.922 14 15.47 8.62 15.47 3.962c0-.15 0-.301-.011-.452a7.13 7.13 0 001.765-1.828l-.033-.015z"
                fill="#2DB0E3"
              ></path>
            </svg>{" "}
            <span>Twitter</span>
          </span>
        </button>

        <button>
          <a
            data-share-type="email"
            href="mailto:?subject=7 Day All-inclusive Italy Luxury Culinary Vacation in Beautiful Roman Countryside&amp;body=Hey, have a look at this Travel Experience in Italy. I love it!%0A%0Ahttps://www.tripaneer.com/sharing/1gy45vPv6g/7-days-travel-experience-italy"
            className=" email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="24">
              <title>Enveloppe icon</title>
              <desc>
                Icon in the shape of an enveloppe used to visualize email
              </desc>
              <path
                d="M21.796.8c.613 0 1.184.258 1.593.696l.042.04.022.035c.306.355.495.79.538 1.256H24v12.146c0 .557-.207 1.082-.574 1.49a.734.734 0 01-.047.056l-.005.004a2.181 2.181 0 01-1.578.677H2.204a2.18 2.18 0 01-1.581-.68l-.012-.01a.538.538 0 01-.038-.048A2.226 2.226 0 010 14.973V3.027c0-.544.2-1.058.544-1.452a.955.955 0 01.023-.037c.027-.027.035-.036.043-.042.414-.44.983-.696 1.594-.696h19.592zm-6.371 8.398l-3.007 2.583a.64.64 0 01-.836 0L8.575 9.199 2.057 15.95a.811.811 0 00.147.013h19.592c.05 0 .098-.004.147-.013l-6.518-6.753zM22.73 2.92l-6.355 5.46 6.36 6.59V3.027a.99.99 0 00-.005-.106zm-21.46 0a.99.99 0 00-.006.106V14.97l6.36-6.588L1.27 2.92zm20.55-.885H2.156L12 10.496l9.844-8.458-.024-.001z"
                fill="#02BF9B"
              ></path>
            </svg>{" "}
            <span>Email</span>
          </a>
        </button>
        <button>
          <a
            data-share-type="whatsapp"
            href="https://api.whatsapp.com/send?text=Hey, have a look at this Travel Experience in Italy. I love it! https://www.tripaneer.com/sharing/1gy45vPv6g/7-days-travel-experience-italy"
            className=" whatsapp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18">
              <path
                d="M18 8.768c0 4.843-3.956 8.768-8.837 8.768a8.863 8.863 0 01-4.27-1.09L0 18l1.595-4.706A8.679 8.679 0 01.328 8.768C.328 3.926 4.283 0 9.164 0 14.044.001 18 3.926 18 8.768zm-8.838-7.37c-4.096 0-7.428 3.307-7.428 7.372 0 1.613.526 3.106 1.415 4.321l-.927 2.737 2.853-.907a7.427 7.427 0 004.087 1.219c4.097 0 7.43-3.306 7.43-7.372.001-4.063-3.333-7.37-7.43-7.37zm4.463 9.39c-.055-.088-.2-.142-.415-.25-.216-.108-1.282-.628-1.48-.698-.2-.073-.344-.109-.488.106-.143.216-.558.7-.686.844-.126.144-.252.162-.469.056-.216-.11-.915-.335-1.742-1.067-.644-.57-1.08-1.273-1.205-1.488-.127-.215-.013-.331.095-.438.097-.097.216-.251.325-.378.109-.125.144-.213.217-.357.07-.144.035-.269-.019-.377-.054-.108-.486-1.165-.668-1.595-.18-.43-.36-.359-.487-.359-.126 0-.27-.017-.415-.017a.793.793 0 00-.577.267c-.198.216-.758.735-.758 1.793 0 1.059.776 2.08.884 2.223.11.142 1.5 2.384 3.701 3.244 2.203.86 2.203.573 2.6.537.398-.037 1.282-.52 1.461-1.021.181-.504.181-.935.126-1.025z"
                fill="#25D366"
              ></path>
            </svg>{" "}
            <span>Whatsapp</span>
          </a>
        </button>
        <button data-share-type="copy-link" className=" social-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="10px"
            width="23px"
            version="1.1"
            viewBox="0 0 23 10"
          >
            <title>Shape</title>
            <desc>Created with Sketch.</desc>
            <g stroke="none" id="Share-buttons" fill="none">
              <g
                transform="translate(-391.000000, -687.000000)"
                id="desktop-bottom-white"
                fill="#02BF9B"
              >
                <g transform="translate(379.000000, 668.000000)" id="Group-12">
                  <path
                    d="M14.043401,23.85 C14.043401,22.2989848 15.2989848,21.043401 16.85,21.043401 L22.3647208,21.043401 L22.3647208,19 L16.85,19 C14.1664975,19 12,21.1664975 12,23.85 C12,26.5335025 14.1664975,28.7 16.85,28.7 L22.3647208,28.7 L22.3647208,26.656599 L16.85,26.656599 C15.2989848,26.656599 14.043401,25.4010152 14.043401,23.85 Z M30.0951777,19 L24.5804569,19 L24.5804569,21.043401 L30.0951777,21.043401 C31.6461929,21.043401 32.9017766,22.2989848 32.9017766,23.85 C32.9017766,25.4010152 31.6461929,26.656599 30.0951777,26.656599 L24.5804569,26.656599 L24.5804569,28.7 L30.0951777,28.7 C32.7786802,28.7 34.9451777,26.5335025 34.9451777,23.85 C34.9451777,21.1664975 32.7786802,19 30.0951777,19 Z M17.6378173,23.85 C17.6378173,24.4162437 18.1055838,24.8840102 18.6718274,24.8840102 L28.2979695,24.8840102 C28.8642132,24.8840102 29.3319797,24.4162437 29.3319797,23.85 C29.3319797,23.2837563 28.8642132,22.8159898 28.2979695,22.8159898 L18.6718274,22.8159898 C18.1055838,22.8159898 17.6378173,23.2837563 17.6378173,23.85 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>{" "}
          <span>Get link</span>{" "}
        </button>
      </div>
      <div className="side-link-rating">
        <div className="rating-stars">
          {[...Array(5)].map((singleStar, i) => (
            <span
              key={i}
              onClick={() => handleRating(i)}
              style={{ cursor: "pointer" }}
            >
              {selectedStar >= i ? (
                <AiFillStar color="#4c9e9e" />
              ) : (
                <AiOutlineStar />
              )}
            </span>
          ))}
        </div>
        <span>Stars Given: {selectedStar + 1} </span>
      </div>

      <div className="reviews">
        <hr />
        <div className="review-comments">
          <div className="first-comment">
            <p>Value for money</p>
            <span>
              {[...Array(5)].map((e, i) => (
                <AiFillStar key={i} color="gray" />
              ))}
            </span>
          </div>
          <div className="first-comment">
            <p>Accommodation </p>
            <span>
              {[...Array(4)].map((e, i) => (
                <AiFillStar key={i} color="gray" />
              ))}
            </span>
          </div>
          <div className="first-comment">
            <p>Food</p>
            <span>
              {[...Array(5)].map((e, i) => (
                <AiFillStar key={i} color="gray" />
              ))}
            </span>
          </div>
          <div className="first-comment">
            <p>Location</p>
            <span>
              {[...Array(4)].map((e, i) => (
                <AiFillStar key={i} color="gray" />
              ))}
            </span>
          </div>
          <div className="first-comment">
            <p>Quality of activity</p>
            <span>
              {[...Array(5)].map((e, i) => (
                <AiFillStar key={i} color="gray" />
              ))}
            </span>
          </div>
        </div>
        <hr className="quote-hr" />
        <p>
          I will love you forever! Truly luxurious accommodations, service,
          beauty, quality. A dream vacation of a lifetime. You will leave an
          expert...
        </p>
        <span className="review-by">
          <b>Teresa Baron-atkinson </b>
          <i>October 20, 2019, United States</i>
        </span>
      </div>
    </>
  );
};

export default SideContainer;
