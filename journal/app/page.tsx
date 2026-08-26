import CalendarCard from "@/components/CalendarCard";
import JournalPanel from "@/components/JournalPanel";
import TodoPanel from "@/components/TodoPanel";

export default function Home() {
  return (
    <div className="flex gap-4 min-h-screen p-6">
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <CalendarCard />
        </div>
        {/* progress bar + buttons go here next */}
        <div className="flex-1">
          Progress
          </div>
        <div className="flex-1">
          Other Buttons
        </div>
      </div>
      <div className="flex-1">
        <JournalPanel />
      </div>
      <div className="flex-1">
        <TodoPanel />
      </div>
    </div>
  );
}