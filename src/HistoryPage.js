import { render } from "@testing-library/react";
import React from "react";
import ReactJson from "react-json-view";
import { If, Else, Then } from "react-if";
import { Link } from "react-router-dom";
import "./HistoryPage.scss";

function handleDisplayDetails(e) {
  // console.log('here', e.view.location.pathname);
  let x = JSON.parse(e.view.localStorage.History);
  let historyEntry = e.target.innerText;
  let selectedMethod = historyEntry.split(/:(.+)/)[0].toLowerCase();
  let selectedURL = historyEntry.split(/:(.+)/)[1];
  let id = e.target.id;

  render(
    <>
      <If condition={e.view.location.pathname === "/history"}>
        <Then>
          <div id="detailedHistory">
            <p>Method: {selectedMethod.toUpperCase()}</p>
            <p>API URL: {selectedURL}</p>
            <p>
              Headers:{" "}
              <ReactJson
                src={x[id]}
                name="Headers"
                iconStyle={"square"}
                collapsed={true}
                enableClipboard={false}
                displayDataTypes={false}
                displayObjectSize={true}
              />
            </p>
            <p>
              Response:{" "}
              <ReactJson
                src={x[id]}
                name="Response"
                iconStyle={"square"}
                collapsed={true}
                enableClipboard={false}
                displayDataTypes={false}
                displayObjectSize={true}
              />
            </p>
          </div>
        </Then>
        <Else>
          <p>An error occurred while getting details</p>
        </Else>
      </If>
    </>
  );
}

function History1(props) {
  console.log("props", props);
  let displayHistory = localStorage.getItem("History")
    ? JSON.parse(localStorage.getItem("History"))
    : [];
  return (
    <>
      <section id="history2">
        <h3>History:</h3>
        <If condition={props.location.pathname === "/history"}>
          <Then>
            {displayHistory.map((entry, idx) => {
              return (
                <div
                  key={(entry.method, entry.url)}
                  onClick={handleDisplayDetails}
                >
                  <section id={idx}>
                    {entry.method.toUpperCase()}: {entry.url}
                  </section>
                  <Link
                    id="link"
                    to={{ pathname: "/", query: { entry: entry } }}
                  >
                    Re Run
                  </Link>
                </div>
              );
            })}
          </Then>
          <Else>
           
          </Else>
        </If>
      </section>
    </>
  );
}

export default History1;
