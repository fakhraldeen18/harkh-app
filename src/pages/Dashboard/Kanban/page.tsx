

const KanbanPage: React.FC = () => {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0  ">
      <div className=" gap-4 md:grid-cols-1 flex-grow h-40 w-full ">
        <div className="aspect-video rounded-xl bg-muted/50 h-full w-full" />
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 flex-grow ">
        <div className="aspect-video rounded-xl bg-muted/50 h-full" />
        <div className="aspect-video rounded-xl bg-muted/50 h-full" />
        <div className="aspect-video rounded-xl bg-muted/50 h-full" />
      </div>
      </div>
    )
  }
  export default KanbanPage;