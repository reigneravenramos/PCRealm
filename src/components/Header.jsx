import React from "react";

export const Header = ({ data }) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {/* Using optional chaining for concise loading check */}
                  {data?.title || "Loading Title..."}
                  <span></span>
                </h1>
                <p>{data?.paragraph || "Loading Description..."}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Buy Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* START: Merged Content from former features.jsx */}
      <div id="features" className="text-center" style={headerStyles.featuresSection}>
        <div className="container" style={headerStyles.container}>
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2 style={headerStyles.title}>BUILD A PC</h2>
          </div>
        </div>
      </div>
      {/* END: Merged Content */}

    </header>
  );
};

// Styles for the section formerly known as "Features"
const headerStyles = {
  featuresSection: {
    position: 'relative',
    color: '#fff',
  },
  container: {
    position: 'relative',
  },
  title: {
    marginTop: '30px',
    color: '#fff',
  },
};
