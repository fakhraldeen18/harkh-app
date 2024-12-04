import TaskBoard from "@/components/Kanban/task-board";
import MainHeader from "@/components/Kanban/layout/mainheader";
import PageContainer from "@/components/Kanban/layout/PageContainer";
import SubHeader from "@/components/Kanban/layout/subheader";

const avatarImages : string[] = [
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
];

const DashboardPage: React.FC = () => {
  return (
    <PageContainer scrollable={false}>
<main className="flex flex-1 flex-col gap-4 p-4 pt-0  overflow-y-hidden">
      <MainHeader title="Mobile App" images={avatarImages}/>
      <SubHeader />
    <TaskBoard/>
   
    </main>
    </PageContainer>
    
  )
}
export default DashboardPage;
