import React from "react";
import SmallChart from "../components/SmallChart";
import MultipleChart from "../components/MultipleChart";
import FileAttachment from "../components/FileAttachment";
import ProjectMember from "../components/ProjectMember";
import ProjectTask from "../components/ProjectTask";
const page = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <SmallChart
          title="Completed Task"
          count={150}
          chartData={[
            { desktop: 1 },
            { desktop: 10 },
            { desktop: 3 },
            { desktop: 4 },
            { desktop: 10 },
            { desktop: 6 },
          ]}
          chartConfig={{
            desktop: {
              label: "Completed",
              color: "#2ECC70",
            },
          }}
        />
        <SmallChart
          title="Incomplete Task"
          count={150}
          chartData={[
            { desktop: 1 },
            { desktop: 10 },
            { desktop: 3 },
            { desktop: 4 },
            { desktop: 10 },
            { desktop: 6 },
          ]}
          chartConfig={{
            desktop: {
              label: "Incomplete",
              color: "#FF0000",
            },
          }}
        />
        <SmallChart
          title="Overdue Task"
          count={150}
          chartData={[
            { desktop: 1 },
            { desktop: 10 },
            { desktop: 3 },
            { desktop: 4 },
            { desktop: 10 },
            { desktop: 6 },
          ]}
          chartConfig={{
            desktop: {
              label: "Overdue",
              color: "#858585",
            },
          }}
        />
        <SmallChart
          title="Total Income"
          count={`${15000} sr`}
          chartData={[
            { desktop: 1 },
            { desktop: 10 },
            { desktop: 3 },
            { desktop: 4 },
            { desktop: 10 },
            { desktop: 6 },
          ]}
          chartConfig={{
            desktop: {
              label: "Total",
              color: "#192181",
            },
          }}
        />
      </div>
      <div className="grid gap-6 grid-cols-[auto_auto] max-xl:grid-cols-1 my-6">
        <MultipleChart />
        <FileAttachment />
        <ProjectMember />
        <ProjectTask />
      </div>
    </div>
  );
};
export default page;
