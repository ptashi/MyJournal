export default function CalendarCard() {
  const today = new Date();

  const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday",
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const dayName = daysOfWeek[today.getDay()];
  const date = today.getDate();
  const monthName = months[today.getMonth()];

  return (
    <div className="flex flex-col bg-white rounded-4xl p-6">
        <div className="text-3xl font-semibold text-black text-center font-fredoka">
            {dayName}
        </div>
        <div className="bg-page-bg text-white font-fredoka text-6xl font-semibold rounded-full w-25 h-25 flex items-center justify-center mx-auto my-8">
            {date}
        </div>
        <div className="text-2xl font-semibold text-black text-center font-fredoka">
            {monthName}
        </div>
    </div>
  );
}