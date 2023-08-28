import React from "react";

export default function Chart() {
  const visibleColumnHeadings = [
    { text: "Header1" },
    { text: "Header2" },
    { text: "Header3" },
    { text: "Header4" }
  ];
  const headings = {
    key: true,
    purchasedate: true,
    purchaseAmount: true,
    createdBy: true,
    addressState: true,
    lastUpdatedDate: true
  };

  let headingsSet = new Set(rows);
  rows.map((r) => headings.hasOwnProperty(r));
  const [visibleHeadings, setVisibleHeadings] = React.useState([]);
  const rows = [
    {
      key: "row1cell1",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row1cell2",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row1cell3",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row1cell4",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row2cell1",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row2cell2",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row2cell3",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row2cell4",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row3cell1",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row3cell2",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row3cell3",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row3cell4",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row4cell1",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row4cell2",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row4cell3",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    },
    {
      key: "row4cell4",
      purchasedate: "08/26/2020",
      purchaseAmount: "$42.20",
      createdBy: "jtwray",
      addressState: "NC",
      lastUpdatedDate: "10/04/2022"
    }
  ];

  return (
    <section>
      <ManageTableSettings />
      <table>
        <TableHead visibleColumnHeadings={visibleColumnHeadings} />
        <TableBody rows={rows} />
      </table>
    </section>
  );
}
export function ManageTableSettings() {
  const [visibleColumns, setVisibleColumns] = React.useState([{}]);
  function handleToggleCheckboxVisibility(e) {
    setVisibleColumns((prevCols) => [
      ...prevCols,
      prevCols.find((s) => s.text === [e.target.id])[0]
    ]);
  }
  return (
    <>
      {visibleColumns.map((vc) => (
        <div key={vc.text}>
          <label htmlFor={vc.text}>{vc.text}</label>
          <input
            type="checkbox"
            value={vc.isSelected}
            name={vc.text}
            id={vc.text}
            onChange={handleToggleCheckboxVisibility}
          />
        </div>
      ))}
    </>
  );
}
export function TableHead({ visibleColumnHeadings }) {
  return (
    <thead>
      <tr>
        {visibleColumnHeadings.map((colHeading) => (
          <th>{colHeading.text}</th>
        ))}
      </tr>
    </thead>
  );
}

export function TableBody({ rows }) {
  console.log({ rows });
  return (
    <tbody>
      {rows?.map((r) => (
        <tr>
          <TableRow r={r} />
        </tr>
      ))}
    </tbody>
  );
}

export function TableRow({ r }) {
  return (
    <>
      {console.log({ r })}
      {Object.entries(r).map(([k, v]) => (
        <td>{v}</td>
      ))}
      {/* {Object.entries(r).map((cell) => (
        <td>{cell.text}</td>
      ))} */}
    </>
  );
}

export function TableCell({ cell }) {
  return <td>{cell}</td>;
}
