import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

// state data for 3 counters
const data = [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }];

// Counter Component
class Counter extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <Button variant="danger">-</Button>
          <Button variant="success">+</Button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <Fragment>
      <section className="section">
        <h2 className="title">React Has Power Workshop Exercise</h2>
        <p>
          <strong>Instructions:</strong> Fork this github repo and modify it per
          the instructions below.
        </p>
        <p>
          There are 2 components in this application: <strong>Counter</strong>{" "}
          and <strong>App</strong>. The steps below will take you through
          modifying and adding components to change functionality and
          implementation.
        </p>
        <ol className="instructions">
          <li>
            Update the Counter component to take <code>onIncrement</code> and{" "}
            <code>onDecrement</code> callbacks as props and ensure they update
            the counter's values independently.
          </li>
          <li>
            Move the global <code>data</code> array to the component state for
            the <code>App</code> component.
          </li>
          <li>
            Render a fourth <code>Counter</code> component and ensure it's value
            is updated independently from the others.
          </li>
          <li>
            Create a <code>Total</code> component, which should display below
            the <code>Counter</code> components and always display the running
            total of all the <code>Counter</code> values.
          </li>
          <li>
            Make a copy of the <code>Counter</code> component, saving the
            original so you're instructor can view it later. Then do the
            following :
            <ol>
              <li>
                Replace the <code>onIncrement</code> and{" "}
                <code>onDecrement</code> callbacks with the new{" "}
                <code>onChange</code> callback prop that sets new values for{" "}
                <code>Counter</code>
              </li>
              <li>
                Ensure all <code>Counter</code> components still update and
                function independently after this change.
              </li>
            </ol>
          </li>
        </ol>
        <p>
          <strong>Additional notes:</strong>
        </p>
        <p>
          Feel free to use React Hooks, decompose the components in the way that
          is the best in your opinion, write some simple tests.
        </p>
      </section>
      <section className="section">
        <div>
          {data.map(counter => (
            <Counter key={counter.id} value={counter.value} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default App;
