const Suggestions = ({ hideSuggestions }) => {
  if (!hideSuggestions) {
    return (
      <>
        <div className="right-top">
          <div className="user">
            <img src="https://i.imgur.com/qQq3QZL.jpg" alt="img" />
          </div>
          <div className="user-det">
            <h4>owais_a</h4>
            <div className="name">Owais Ansari</div>
          </div>
          <div className="switch">Switch</div>
        </div>
        <div className="suggestions">
          <div className="head">
            <div className="first-line">
              <h4> Suggestions for you</h4>
              <span className="s2">See All</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Suggestions;
