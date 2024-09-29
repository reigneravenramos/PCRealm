import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center" style={styles.featuresSection}>
      <div className="container" style={styles.container}>
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 style={styles.title}>BUILD A PC</h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  featuresSection: {
    position: 'relative',
    color: '#fff',
  },
  container: {
    position: 'relative',
  },
  title: {
    marginTop: '70px',
    color: '#fff',
  },
};

export default Features;
