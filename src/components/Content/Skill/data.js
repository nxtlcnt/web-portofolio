import {
  SiNextdotjs,
  SiAstro,
  SiSupabase,
  SiMongodb,
  SiMaplibre,
  SiLeaflet,
  SiQgis,
  SiGeopandas,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiGoogleearthengine,
  SiStreamlit,
} from "react-icons/si";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";

export const skill = [
  {
    title: "Web Development",
    description: [
      {
        icon: <SiNextdotjs className="inline-block align-text-top mr-1" />,
        text: "Next.js",
      },
      {
        icon: <RiReactjsLine className="inline-block align-text-top mr-1" />,
        text: "React.js",
      },
      {
        icon: <SiAstro className="inline-block align-text-top mr-1" />,
        text: "Astro.js",
      },
      {
        icon: (
          <RiTailwindCssFill className="inline-block align-text-top mr-1" />
        ),
        text: "Tailwind CSS",
      },
      {
        icon: <SiSupabase className="inline-block align-text-top mr-1" />,
        text: "Supabase",
      },
      {
        icon: <SiMongodb className="inline-block align-text-top mr-1" />,
        text: "MongoDB",
      },
    ],
  },
  {
    title: "Geographic Information System",
    description: [
      {
        icon: <SiMaplibre className="inline-block align-text-top mr-1" />,
        text: "MapLibre",
      },
      {
        icon: <SiLeaflet className="inline-block align-text-top mr-1" />,
        text: "Leaflet",
      },
      {
        icon: <SiQgis className="inline-block align-text-top mr-1" />,
        text: "QGIS",
      },
      {
        icon: <SiGeopandas className="inline-block align-text-top mr-1" />,
        text: "GeoPandas",
      },
      {
        icon: <SiPandas className="inline-block align-text-top mr-1" />,
        text: "Pandas",
      },
      {
        icon: <SiNumpy className="inline-block align-text-top mr-1" />,
        text: "NumPy",
      },
      {
        icon: <SiTensorflow className="inline-block align-text-top mr-1" />,
        text: "TensorFlow",
      },
      {
        icon: (
          <SiGoogleearthengine className="inline-block align-text-top mr-1" />
        ),
        text: "Google Earth Engine",
      },
      {
        icon: <SiStreamlit className="inline-block align-text-top mr-1" />,
        text: "Streamlit",
      },
    ],
  },
];
