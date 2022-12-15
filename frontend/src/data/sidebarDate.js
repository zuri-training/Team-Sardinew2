import vector3 from "../assets/images/Vector3.png";
import vector4 from "../assets/images/vector4.png";
import vector from "../assets/images/Vector.png";
import vector1 from "../assets/images/Vector1.png";
import uuid from "react-uuid";

const id = uuid();
export const sidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <img src={vector3} className="img-feeder" alt="..." />,
  },
  {
    title: "Create Form",
    path: `/form/${id}`,
    icon: <img src={vector1} className=" img-feeder" alt="..." />,
  },
  {
    title: "Overview",
    path: "/",
    icon: <img src={vector4} className=" img-feeder" alt="..." />,
  },
  {
    title: "Settings",
    path: "/",
    icon: <img src={vector} className="img-feeder" alt="..." />,
  },
];
