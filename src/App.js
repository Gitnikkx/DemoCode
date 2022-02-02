import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="heading">Team Members</div>
          <div className="addmembers">
            <div className="text">Add members +</div>
          </div>
        </div>
        <div className="line"></div>
        <button type="button" class="btn">
          Company(0)
        </button>
        <button type="button" class="btn">
          Status
        </button>

        <div class="form">
          <div className="label-bar">
            <input
              class="tick"
              type="checkbox"
              id="check1"
              name="option1"
              value="something"
            ></input>
            <label class="label">Name</label>
            <div class="label">Company</div>
            <div class="label">Status</div>
            <div class="label">Last Updated</div>
            <div class="label">Notes</div>
          </div>

          <div className="label-bar">
            <input
              class="tick"
              type="checkbox"
              id="check1"
              name="option1"
              value="something"
            ></input>
            <label class="details">Wayne Rooney</label>
            <div class="details">DC United</div>
            <div class="details">Active</div>
            <div class="details">7/07/2017</div>
            <div class="details">ManUtd Highest Scorer</div>
          </div>
          <div className="label-bar">
            <input
              class="tick"
              type="checkbox"
              id="check1"
              name="option1"
              value="something"
            ></input>
            <label class="details">Ryan Giggs</label>
            <div class="details">Manchester United</div>
            <div class="details">Closed</div>
            <div class="details">3/08/2011</div>
            <div class="details">Most matches played</div>
          </div>
          <div className="label-bar">
            <input
              class="tick"
              type="checkbox"
              id="check1"
              name="option1"
              value="something"
            ></input>
            <label class="details">Zlatan Ibrahimović</label>
            <div class="details">LA Galaxy</div>
            <div class="details">Active</div>
            <div class="details">3/09/2018</div>
            <div class="details">I am Zlatan</div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
