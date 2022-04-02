import {
  LineChart,
  Line,
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";


function ChartApp({dataChart}) {
  
  let newDataChart= dataChart.map(e=>{return{v:e}})
 
  
  return (
    <>
    <ResponsiveContainer width="100%" height={50}>
      <AreaChart data={newDataChart}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5BC288" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <YAxis hide type="number" domain={['dataMin', 'dataMax']}/>
      <Area dataKey='v' stroke="#5BC288" fill="url(#color)"/>
      </AreaChart>
      
    </ResponsiveContainer>
      {/* <LineChart width={100} height={50} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart> */}
    </>
  );
}

export default ChartApp;
