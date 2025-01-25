"use client";
import { FileCheck } from "lucide-react";
import { Line, LineChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { SmallChartTY } from "../[project-id]/page";
const SmallChart = ({ chartData, chartConfig, title, count }: SmallChartTY) => {
  return (
    <Card className="w-full flex gap-10 justify-between items-center p-2 h-20">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center capitalize gap-2">
          <FileCheck size={15} color={chartConfig.desktop.color} />
          <span className="text-[#A7A7A7] capitalize">{title}</span>
        </div>
        <div className="font-bold">{count}</div>
      </div>
      <CardContent className="flex flex-col items-center w-20 h-full">
        <ChartContainer className="h-10 w-20" config={chartConfig}>
          <LineChart accessibilityLayer data={chartData}>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="absolute -left-16 -bottom-16"
                />
              }
            />
            <Line
              dataKey="desktop"
              type="bump"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
        <div className="text-[14px]">30%</div>
      </CardContent>
    </Card>
  );
};
export default SmallChart;
