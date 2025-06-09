import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { day: 'Mon', hours: 6 },
  { day: 'Tue', hours: 7 },
  { day: 'Wed', hours: 6.5 },
  { day: 'Thu', hours: 5 },
  { day: 'Fri', hours: 9 },
  { day: 'Sat', hours: 7.2 },
  { day: 'Sun', hours: 6.8 },
];

const CustomDot = ({ cx, cy, value, index }) => {
  if (index === 4) {
    return (
      <>
        <circle cx={cx} cy={cy} r={8} fill="#fff" stroke="#1E88E5" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={4} fill="#1E88E5" />
      </>
    );
  }
  return <circle cx={cx} cy={cy} r={0} />;
};

export default function SleepChart() {
  return (
    <Box sx={{ p: 2, borderRadius: 3, background: '#fff' }}>
      <Typography variant="subtitle2" color="text.secondary" mb={1}
      sx={{
        fontFamily: 'inherit'
      }}
      >
        Sleep Hours
      </Typography>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorSleep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#42A5F5" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#42A5F5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            stroke="#90A4AE"
            tick={{ fill: '#90A4AE', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              borderColor: '#90A4AE',
              fontSize: 14,
            }}
            formatter={(value) => [`${value} hrs`, 'Sleep']}
          />
          <Area
            type="monotone"
            dataKey="hours"
            stroke="#42A5F5"
            fill="url(#colorSleep)"
            dot={<CustomDot />}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
