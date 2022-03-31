import { LineChart, Line } from "recharts";

const data = [
  {  uv: 400 },
  {  uv: 300 },
  {  uv: 300 },
  {  uv: 200 },
  {  uv: 278 },
  {  uv: 189 },
  
];
function ChartApp() {
  return (
    <>
      <LineChart width={100} height={50} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </>
  );
}

export default ChartApp;
