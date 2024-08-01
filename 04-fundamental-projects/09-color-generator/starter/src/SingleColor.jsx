import React from "react";

const SingleColor = ({ hex, weight, type, toast }) => {
  const colorType = type === "shade" ? "#fff" : "#000";

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("hex code copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy the hex code: ", error);
    }
  };

  return (
    <article
      className="color"
      style={{
        backgroundColor: `#${hex}`,
        color: `${colorType}`,
        cursor: "pointer",
      }}
      onClick={() => {
        const textToCopy = `#${hex}`;
        copyToClipboard(textToCopy);
      }}
    >
      {<h5>#{hex}</h5>}
      <h5>
        {colorType === "#000" && weight > 0 ? `- ${weight}%` : `${weight}%`}
      </h5>
      <p>Copy color to clipboard</p>
    </article>
  );
};

export default SingleColor;
