import TaskCard from "../component/TaskCard";

const TodoApp = () => {
  return (
    <section className="w-full h-screen p-20">
      <h3 className="font-mono text-4xl font-bold">Personal Todos</h3>
      <p className="text-slate-600">A Board to keep your personal tasks.</p>
      <div className="m-10 p-10 rounded-xl bg-gray-100 gird grid grid-cols-4">
        <div className="mx-5">
          <div className="rounded-3xl bg-slate-300 w-fit px-3 text-gray-00 py-2 text-sm font-semibold">
            Not Started
          </div>
          <TaskCard />
          <TaskCard isDue />
        </div>
        <div className="mx-5">
          <div className="rounded-3xl bg-purple-200 w-fit px-3 text-gray-00 py-2 text-sm font-semibold">
            In Progress
          </div>
          <TaskCard />
          <TaskCard isDue />
        </div>
        <div className="mx-5">
          <div className="rounded-3xl bg-pink-200 w-fit px-3 text-gray-00 py-2 text-sm font-semibold">
            Blocked
          </div>
          <TaskCard />
          <TaskCard isDue />
          <TaskCard />
          <TaskCard isDue />
        </div>
        <div className="mx-5">
          <div className="rounded-3xl bg-green-200 w-fit px-3 text-gray-00 py-2 text-sm font-semibold">
            Done
          </div>
          <TaskCard />
        </div>
      </div>
    </section>
  );
};

export default TodoApp;
