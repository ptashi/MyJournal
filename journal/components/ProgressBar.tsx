type ProgressBarProps = {
  tasks: { task: string; isComplete: boolean }[];
};

export default function ProgressBar({ tasks } : ProgressBarProps) {
    const numTasks = tasks.length
    const completedTasks = tasks.filter(t =>  t.isComplete).length
    const percent = numTasks === 0 ? 0 : Math.round((completedTasks / numTasks) * 100)


    return (
        <div className="rounded-2xl p-4 text-center mb-10">
            <div className="text-2xl font-semibold text-coffee mb-2 font-fredoka">
                Progress
            </div>
            <div className="w-full outline outline-black rounded-full h-7 overflow-hidden">
                <div className="bg-coffee h-full transition-all" style={{ width: `${percent}%` }} />
            </div>
            <div className="text-xs text-gray-500 mt-1">{percent}%</div>
        </div>
    )
}