import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MessageComponent from "../MessageComponent/Message.component";

import "./BarChart.styles.css";

const BarChartComponent = (props) => {
  const { chartData } = props;
  return (
    <div className="bar-chart-container">
      {!chartData.length ? (
        <MessageComponent text="No Result Found" />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 100,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" angle={-90} textAnchor="end" interval={0} />

            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="count" fill="#5a9799" isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BarChartComponent;
