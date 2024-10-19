"use client";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import "./custom-ag-grid.css";
import React, { useState } from "react";
import FilterCard from "../filtercard";
import ImageCard from "../imagecard";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Table = () => {
  const [rowData, setRowData] = useState([
    {
      "Product Filter": [
        {
          filterItem: "Product Collection",
          filter: "contains",
          value: "Anarkali Kurtas",
        },
      ],
      "Primary Variant": "https://picsum.photos/200/300",
      "Variant 2": "https://picsum.photos/200/300",
      "Variant 3": "https://picsum.photos/200/300",
    },
  ]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [colDefs, setColDefs] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 50,
    },
    {
      field: "Product Filter",
      rowDrag: true,
      cellRenderer: FilterCard,
      width: 600,
    },
    {
      field: "Primary Variant",
      cellRenderer: ImageCard,
    },
    {
      field: "Variant 2",
      cellRenderer: (params) => <ImageCard value={params.value} />,
    },
    {
      field: "Variant 3",
      cellRenderer: (params) => <ImageCard value={params.value} />,
    },
  ]);

  const addRow = () => {
    const newRow = {
      "Product Filter": [
        {
          filterItem: "Product Collection",
          filter: "contains",
          value: "New Product",
        },
      ],
      "Primary Variant": "https://picsum.photos/200/300",
      "Variant 2": "https://picsum.photos/200/300",
      "Variant 3": "https://picsum.photos/200/300",
    };
    setRowData((prevRowData) => [...prevRowData, newRow]);
  };

  const deleteRow = () => {
    if (selectedRow !== null) {
      setRowData((prevRowData) =>
        prevRowData.filter((_, index) => index !== selectedRow)
      );
      setSelectedRow(null);
    }
  };

  const addVariant = () => {
    const newVariantKey = `Variant ${colDefs.length - 2}`;
    const newVariantValue = "https://picsum.photos/200/300";

    setRowData((prevRowData) => {
      return prevRowData.map((row, index) => ({
        ...row, [newVariantKey]: newVariantValue,
      }));
    });

    setColDefs((prevColDefs) => [
      ...prevColDefs,
      {
        field: newVariantKey,
        cellRenderer: (params) => <ImageCard value={params.value} />,
      },
    ]);
  };

  const onRowSelected = (event) => {
    const selectedNodes = event.api.getSelectedNodes();
    setSelectedRow(selectedNodes.length > 0 ? selectedNodes[0].rowIndex : null);
  };

  const defaultColDef = {
    flex: 0,
  };

  const onRowDragEnd = (event) => {
    const newRowData = [...rowData];
    const draggedNode = event.node;
    const dragToIndex = event.overIndex;

    newRowData.splice(draggedNode.rowIndex, 1);
    newRowData.splice(dragToIndex, 0, draggedNode.data);

    setRowData(newRowData);
  };

  const getRowHeight = (params) => {
    return 160;
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
        <div>
          <Button onClick={addRow}>Add</Button>
          <Button onClick={deleteRow} disabled={selectedRow === null}>
            Delete
          </Button>
        </div>
        <div>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => addVariant(selectedRow)} 
            startIcon={<AddIcon />}
          >
            Add Variant
          </Button>
        </div>
      </div>
      <div
        className={"ag-theme-quartz"}
        style={{ width: "100%", height: "600px", margin: "40px 0px" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          onRowDragEnd={onRowDragEnd}
          getRowHeight={getRowHeight}
          autoHeight={true}
          rowSelection="single"
          onSelectionChanged={onRowSelected}
        />
      </div>
    </div>
  );
};

export default Table;
