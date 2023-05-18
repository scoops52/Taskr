import { Task } from "@/store/tasksSlice"

export const exampleTasks: Task[] = [
    {
        id: Math.floor(Math.random() * 1000000),
        name: 'Answer Emails',
        duration: 45,
        isActive: false,
        timeRemaining: 45 * 60,
        endTime: 0,
        backgroundColor: 'bg-emerald-600',
        outlineColor: 'outline outline-4 outline-emerald-800',
    },
    {
        id: Math.floor(Math.random() * 1000000),
        name: 'Study',
        duration: 120,
        isActive: false,
        timeRemaining: 120 * 60,
        endTime: 0,
        backgroundColor: 'bg-cyan-600',
        outlineColor: 'outline outline-4 outline-cyan-800',
    },
    {
        id: Math.floor(Math.random() * 1000000),
        name: 'Practice Guitar',
        duration: 60,
        isActive: false,
        timeRemaining: 60 * 60,
        endTime: 0,
        backgroundColor: 'bg-fuchsia-600',
        outlineColor: 'outline outline-4 outline-fuchsia-800',
    },
]

