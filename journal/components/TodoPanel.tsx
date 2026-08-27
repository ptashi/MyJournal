"use client"
type TodoPanelProps = {
    tasks: { task: string; isComplete: boolean}[];
    setTasks: React.Dispatch<React.SetStateAction<{ task: string; isComplete: boolean}[]>>;
}

export default function TodoPanel({ tasks, setTasks }: TodoPanelProps) {

    const addTaskRow = () => {
        setTasks(prevList => [...prevList, {task: "", isComplete: false}])
    }

    const toggleDone = (index: number) => {
        const updated = [...tasks];
        updated[index] = { ...updated[index], isComplete: !updated[index].isComplete };
        setTasks(updated);
    }

    const updateTaskText = (index: number, newText: string) => {
        const updated = [...tasks];
        updated[index] = { ...updated[index], task: newText };
        setTasks(updated);
    }

    const deleteRow = (index: number) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    return (
        <div className="flex flex-col bg-paper rounded-xl h-screen">
            <div className="text-4xl font-semibold text-center text-coffee py-10 font-fredoka">
                To Do
            </div>
            <div className="todolistContainer flex-1 mx-10 mb-10">
                {tasks.map((task, index) => (
                    <div key={index} className="flex items-center gap-3 border-b border-black/20 py-3">
                        <input type="checkbox" checked={task.isComplete} onChange={() => toggleDone(index)} className="w-5 h-5 accent-page-bg cursor-pointer" />
                        <input type="text" placeholder="Type your task here..." value={task.task} onChange={(e) => updateTaskText(index, e.target.value)} className={`flex-1 focus:outline-none ${task.isComplete ? "line-through text-strikeout" : ""}`}/>
                        <button onClick={() => deleteRow(index)} className="w-5 h-5 cursor-pointer text-coffee hover:text-page-bg">✕</button>
                    </div>
                ))}

                <button onClick={addTaskRow} className="text-coffee cursor-pointer font-semibold text-md mt-3 hover:text-black">+ Add Task</button>
            </div>
        </div>
    )
}