import "../styles/Notify.css";

const Notify = (obj) => {
  const { display, setDisplay } = obj.obj;
  console.log({ display });

  const closeMod = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="win-cont">
        <div className="win-head">
          <p onClick={closeMod} className="close">
            &times;
          </p>
        </div>

        <div className="win-content">
          <h1>This is our content</h1>
        </div>

        <div className="footer">
          <button className="footer-btn-submit">Submit</button>
          <button className="footer-btn-cancel">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Notify;
