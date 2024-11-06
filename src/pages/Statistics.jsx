import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
const colors = [
  "#0085F6",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "green",
  "orange",
  "#0088FE",
  "#0085F6",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "green",
  "orange",
  "#0088FE",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Statistics = () => {
   
  const allProductsData = useLoaderData();
  const data = allProductsData.map((product) => {
    return { name: `${product.product_title}`, uv: `${product.price}` };
  });


  return (
    <>
      <Helmet>
      <title>Statistics | | Gadget Heaven</title>
      </Helmet>

      <div className="flex justify-center items-center my-10 w-full h-full">
      <ResponsiveContainer width="100%" height={500}>
      <BarChart width={1000} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis
    dataKey="name"
    interval={0}
    textAnchor="middle"
    style={{ fontSize: '8px' }}
    
  />
  <YAxis />
  <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={colors[index]} />
    ))}
  </Bar>
</BarChart>

      </ResponsiveContainer>
    </div>
       
    </>
);
};

export default Statistics;
