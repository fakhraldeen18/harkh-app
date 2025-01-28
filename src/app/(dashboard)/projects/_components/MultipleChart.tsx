"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 86, mobile: 80 },
  { month: "February", desktop: 15, mobile: 20 },
  { month: "March", desktop: 37, mobile: 20 },
  { month: "April", desktop: 73, mobile: 90 },
  { month: "May", desktop: 19, mobile: 30 },
  { month: "June", desktop: 14, mobile: 40 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FEC84B",
  },
  mobile: {
    label: "Mobile",
    color: "#9E77ED",
  },
} satisfies ChartConfig;
import React from "react";
const MultipleChart = () => {
  return (
    <Card className="w-full h-[420px]">
      <CardHeader>
        <CardTitle>Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="h-80 w-full max-sm:w-64"
          config={chartConfig}
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={[20, 40, 60, 80, 100]}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default MultipleChart;
