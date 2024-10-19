import React from "react";
import CustomCard from "../customcard";
import { CustomTag } from "../customtag";
import { v4 as uuidv4 } from "uuid";

const FilterCard = ({
  filters = [
    {
      filterItem: "Product Collection",
      filter: "contains",
      value: "Anarkali Kurtas",
    }
  ],
}) => {
  return (
    <CustomCard
    height={140}
      content={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            overflow: "scroll"
          }}
        >
          {filters.map((item) => (
            <div key={uuidv4()}>
              <CustomTag
                text={item.filterItem}
                customColor="grey"
                style={{
                  borderRadius: "6px",
                }}
              />
              <CustomTag
                text={item.filter}
                customColor="#06ae57"
                style={{
                  borderRadius: "6px",
                }}
                fill
              />
              <CustomTag
                text={item.value}
                customColor="grey"
                style={{
                  borderRadius: "6px",
                }}
              />
            </div>
          ))}
        </div>
      }
    />
  );
};

export default FilterCard;
