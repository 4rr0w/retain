import React from "react";
import { Tag } from "antd";
import Color from "color";
import classnames from "classnames";
import styles from "./style.module.css";

export const CustomTag = ({
  defaultColor = undefined,
  text = "",
  icon = undefined,
  customColor = "rgba(48, 0, 156)",
  size = 12,
  fill = false,
  textColor = customColor,
  noBorder = false,
  leads = false,
  onSelect,
  className = "",
  style = {},
}) => {
  const getPadding = () => {
    if (size >= 12) return "2px 12px";
    if (size < 8) return "0px 12px";
    return "2px 12px";
  };

  const customStyling = {
    boxShadow: noBorder ? "none" : `0 0 0 ${leads ? "2" : 1}px ${customColor}`,
    color: textColor,
    background: fill ? Color(customColor).alpha(0.1) : "transparent",
  };

  const sizeStyling = {
    fontSize: `${size}px`,
    padding: getPadding(size),
    borderRadius: `${size * 2}px`,
  };
  console.log({
    ...(defaultColor ? sizeStyling : { ...customStyling, ...sizeStyling }),
    ...style 
  })

  return (
    <Tag
      className={classnames(
        `${icon ? styles.tagWithIcon : styles.tag}`,
        className
      )}
      style={{
        ...(defaultColor ? sizeStyling : { ...customStyling, ...sizeStyling }),
        ...style 
      }}
      color={defaultColor}
      icon={icon}
      onClick={onSelect}
    >
      {text}
    </Tag>
  );
};
