const habits = [
  {
    id: 1,
    name: "Morning Run",
    icon: "🏃",
    streak: 14,
    target: 7,
    done: [1, 2, 3, 5, 6],
    color: "#7c3aed",
  },
  {
    id: 2,
    name: "Read 30 mins",
    icon: "📚",
    streak: 7,
    target: 7,
    done: [1, 2, 4, 5, 6, 7],
    color: "#06b6d4",
  },
  {
    id: 3,
    name: "Meditate",
    icon: "🧘",
    streak: 21,
    target: 7,
    done: [1, 2, 3, 4, 5, 6, 7],
    color: "#10b981",
  },
  {
    id: 4,
    name: "Drink Water",
    icon: "💧",
    streak: 3,
    target: 7,
    done: [5, 6, 7],
    color: "#f59e0b",
  },
  {
    id: 5,
    name: "Journal",
    icon: "✍️",
    streak: 5,
    target: 7,
    done: [3, 4, 5, 6, 7],
    color: "#ec4899",
  },
];

const stats = [
  { label: "Current Streak", value: "21", unit: "days", icon: "🔥" },
  { label: "Completed Today", value: "3", unit: "/ 5", icon: "✅" },
  { label: "This Week", value: "87", unit: "%", icon: "📈" },
];

function DashBoard() {
  return (
    <div className="min-h-screen bg-[#0f0f13] flex flex-col pb-24 md:px-30 lg:px-50">
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight mt-0.5">
              Hello Jane 👋
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-red-700 px-8 py-2 flex items-center justify-center text-white font-bold rounded-sm cursor-pointer">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 mb-5">
        <div className="flex gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex-1 bg-[#1c1c24] border border-[#2d2d38] rounded-2xl px-3 py-3.5 flex flex-col items-center gap-1"
            >
              <span className="text-xl">{s.icon}</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-white font-bold text-lg leading-none">
                  {s.value}
                </span>
                <span className="text-[#6b7280] text-xs">{s.unit}</span>
              </div>
              <span className="text-[#6b7280] text-[10px] text-center leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 flex-1">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-semibold text-base">Today's Habits</h2>
          <button className="text-[#c4b5fd] text-xs font-medium">
            + Add Habit
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {habits.map((habit) => {
            const progress = (habit.done.length / habit.target) * 100;
            const completedToday = habit.done.includes(6);

            return (
              <div
                key={habit.id}
                className={`bg-[#1c1c24] border rounded-2xl px-4 py-4 ${
                  completedToday ? "border-[#2d2d38]" : "border-[#2d2d38]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      completedToday
                        ? "bg-gradient-to-br from-[#7c3aed] to-[#6d28d9]"
                        : "bg-[#2d2d38]"
                    }`}
                  >
                    {completedToday ? (
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M1 5.5L5 9.5L13 1.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="text-sm">{habit.icon}</span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-sm font-semibold ${completedToday ? "text-[#9ca3af] line-through" : "text-white"}`}
                      >
                        {habit.name}
                      </span>
                      <span className="text-[10px] text-[#f59e0b] font-medium flex items-center gap-0.5">
                        🔥 {habit.streak}d
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 bg-[#2d2d38] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${progress}%`,
                          background: `linear-gradient(90deg, ${habit.color}, ${habit.color}aa)`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-[#4b4b5a]">
                        {habit.done.length}/{habit.target} days
                      </span>
                      <span
                        className="text-[10px]"
                        style={{ color: habit.color }}
                      >
                        {Math.round(progress)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
