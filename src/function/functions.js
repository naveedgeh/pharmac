import { React } from "react";
import Icons from "../asets/icons";
//// Methond one to image to base64
export const getBase64 = (file) => {
  return new Promise((resovle, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload(() => resovle(reader.result));
    reader.onerror((error) => reject(error));
  });
};
///// Method two image to base64
export const getBase64_2 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
//// before Image upload
export const beforeUpload = (file) => {
  const filetype = ["image/jpeg", "imgae/png", "image/jpg"];
  if (filetype.indexOf(file.type) == -1) {
    return "sorry image is not supported";
  }
};
export const summaryData = (title) => {
  switch (title) {
    case "totalcustomer":
      return {
        title: "Total Customer",
        css: {
          fontSize: "20px",
          backgroundColor: "green",
        },
        icon: Icons.ic1,
      };
      break;
    case "totalsale":
      return {
        title: "Total Sale",
        css: {
          fontSize: "20px",
        },
        icon: Icons.ic2,
      };
      break;
    case "totalpurchase":
      return {
        title: "Total Purchase",
        css: {
          fontSize: "20px",
          backgroundColor: "#fd7e14",
        },
        icon: Icons.ic3,
      };
    case "totalstock":
      return {
        title: "Total Stock",
        css: {
          fontSize: "20px",
          backgroundColor: "#370665",
        },
        icon: Icons.ic4,
      };
    default:
      break;
  }
};
