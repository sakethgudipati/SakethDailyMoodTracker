import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';
import "./index.css";

const emojiReportResult = [
  {
    id: 101001,
    emojiImageUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
    count: 9,
  },
  {
    id: 101002,
    emojiImageUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
    count: 12,
  },
  {
    id: 101003,
    emojiImageUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
    count: 7,
  },
  {
    id: 101004,
    emojiImageUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
    count: 4,
  },
  {
    id: 101005,
    emojiImageUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
    count: 2,
  },
];

// Custom tick component to display emoji images
const renderCustomAxisTick = ({ x, y, payload }) => {
  const emojiData = emojiReportResult.find((emoji) => emoji.id === payload.value);
  if (!emojiData) return null;

  return (
    <image
      href={emojiData.emojiImageUrl}
      x={x - 15}
      y={y-3}
      width={30}
      height={30}
      alt="emoji"
    />
  );
};

const BarGraph = () => (
  <ResponsiveContainer className="bar-chart" width="100%" height={350}>
    <BarChart
      data={emojiReportResult}
      margin={{
        top: 5,
      }}
    >
      {/* Custom tick for XAxis to display emoji images */}
      <XAxis
        dataKey="id"
        tick={renderCustomAxisTick} // Use custom tick component
        tickLine={false} // Hide default tick lines if desired
      />
      <YAxis
        tick={{
          stroke: 'gray',
          strokeWidth: 0,
        }}
      />
      <Bar dataKey="count" fill="#FFBE38" barSize="7%" radius={[10, 10, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

export default BarGraph;
