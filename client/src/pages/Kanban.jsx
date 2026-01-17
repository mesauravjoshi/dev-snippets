import { useState, useMemo } from "react";

const Kanban = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDrop = (status) => {
    if (!draggedTask) return;

    setTasks(prev =>
      prev.map(t =>
        t.id === draggedTask.id
          ? { ...t, status }
          : t
      )
    );

    setDraggedTask(null);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!input) return;
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        title: input,
        status: 'todo'
      }
    ]);
    setInput('');
  }

  const todoTasks = useMemo(
    () => tasks.filter(t => t.status === 'todo'),
    [tasks]
  );

  const progressTasks = useMemo(
    () => tasks.filter(t => t.status === 'progress'),
    [tasks]
  );

  const doneTasks = useMemo(
    () => tasks.filter(t => t.status === 'done'),
    [tasks]
  );

  const handleForward = (task) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id
          ? {
            ...t,
            status:
              t.status === 'todo'
                ? 'progress'
                : t.status === 'progress'
                  ? 'done'
                  : t.status
          }
          : t
      )
    );
  };

  const handleBackward = (task) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id
          ? {
            ...t,
            status:
              t.status === 'done'
                ? 'progress'
                : t.status === 'progress'
                  ? 'todo'
                  : t.status
          }
          : t
      )
    );
  }

  const handleRemoveTask = (task) => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-[#F5E8D8] px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-2xl font-semibold text-center tracking-wide">Kanban </h1>

        <div className="text-center mb-4">
          <form className='mb-2 text-center' onSubmit={handleAddTask}>
            <input type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='border border-[#2E2E2E] rounded-xl mb-1 p-3'
            />
            <button
              type="submit"
              className="mt-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#FF6F61] text-black hover:bg-[#FF4500] transitiondisabled:opaci ty-40 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </form>
        </div>

        {/* Task board */}
        <section>
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <div
              onDragOver={allowDrop}
              onDrop={() => handleDrop('todo')}
              className="bg-[#232323] border border-[#2E2E2E] rounded-xl p-5 space-y-3"
            >
              <p className="font-medium">Todo</p>
              {/* Todos  */}
              {
                todoTasks.map((task, index) => (
                  <div
                    draggable
                    onDragStart={() => handleDragStart(task)}
                    className="bg-[#232323] border border-[#FF6F61] rounded-xl p-3 space-y-3 cursor-grab"
                  >
                    <p className="font-medium">{index + 1}. {task.title}</p>

                    <div className="flex items-center gap-2">
                      <button
                        className="px-3 py-1 border border-[#FF6F61] rounded hover:bg-[#FF4500] disabled:cursor-not-allowed "
                        disabled={task.status === 'todo'}
                      >{'<-'}</button>

                      <span className="px-4 cursor-pointer" onClick={() => handleRemoveTask(task)}>🗑️</span>

                      <button
                        onClick={() => handleForward(task)}
                        className="px-3 py-1 border border-[#FF6F61] rounded hover:bg-[#FF4500] cursor-pointer"
                      >{'->'} </button>
                    </div>
                  </div>
                ))
              }
            </div>
            <div
              onDragOver={allowDrop}
              onDrop={() => handleDrop('progress')}
              className="bg-[#232323] border border-[#2E2E2E] rounded-xl p-5 space-y-3"
            >
              <p className="font-medium">In Progress</p>
              {/* Progess  */}
              {
                progressTasks.map((task, index) => (
                  <div
                    draggable
                    onDragStart={() => handleDragStart(task)}
                    className="bg-[#232323] border border-[#FF6F61] rounded-xl p-3 space-y-3 cursor-grab"
                  >
                    <p className="font-medium">{index + 1}. {task.title}</p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleBackward(task)}
                        className="px-3 py-1 border border-[#FF6F61] rounded hover:bg-[#FF4500] disabled:cursor-not-allowed "
                      >{'<-'}</button>

                      <span className="px-4 cursor-pointer" onClick={() => handleRemoveTask(task)}>🗑️</span>

                      <button
                        onClick={() => handleForward(task)}
                        className="px-3 py-1 border border-[#FF6F61] rounded hover:bg-[#FF4500] cursor-pointer"
                      >{'->'} </button>
                    </div>
                  </div>
                ))
              }
            </div>

            <div
              onDragOver={allowDrop}
              onDrop={() => handleDrop('done')}
              className="bg-[#232323] border border-[#2E2E2E] rounded-xl p-5 space-y-3"
            >
              <p className="font-medium">Done</p>
              {
                doneTasks.map((task, index) => (
                  <div
                    draggable
                    onDragStart={() => handleDragStart(task)}
                    className="bg-[#232323] border border-[#FF6F61] rounded-xl p-3 space-y-3 cursor-grab"
                  >
                    <p className="font-medium">{index + 1}. {task.title}</p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleBackward(task)}
                        className="px-3 py-1 border border-[#FF6F61] rounded hover:bg-[#FF4500] disabled:cursor-not-allowed "
                      >{'<-'}</button>

                      <span className="px-4 cursor-pointer" onClick={() => handleRemoveTask(task)}>🗑️</span>

                      <button
                        className="px-3 py-1 border border-[#FF6F61] rounded hover:bg-[#FF4500] cursor-pointer disabled:cursor-not-allowed"
                        disabled={task.status === 'done'}
                      >{'->'} </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

      </div >
    </div >
  );
};

export default Kanban;
