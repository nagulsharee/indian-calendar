const holidays: Record<string, string> = {
  "2026-01-01": "New Year",
  "2026-01-13": "Bhogi",
  "2026-01-14": "Makar Sankranti",
  "2026-01-15": "Kanuma",
  "2026-01-26": "Republic Day",
  "2026-02-15": "Maha Shivaratri",
  "2026-02-21": "Eid-ul-Fitr",
  "2026-03-04": "Holi",
  "2026-03-20": "Ugadi",
  "2026-03-26": "Ram Navami",
  "2026-04-03": "Good Friday",
  "2026-04-14": "Dr. B.R. Ambedkar Jayanti",
  "2026-05-01": "Labour Day",
  "2026-05-14": "Eid-ul-Adha",
  "2026-06-26": "Muharram",
  "2026-08-09": "Bonalu",
  "2026-08-10": "Bonalu",
  "2026-08-15": "Independence Day",
  "2026-08-26": "Milad-ul-Nabi",
  "2026-08-28": "Onam/Raksha Bandhan",
  "2026-09-04": "Janmashtami",
  "2026-09-05": "Teachers Day",
  "2026-09-14": "Ganesh Chaturthi",
  "2026-10-02": "Gandhi Jayanti",
  "2026-10-20": "Dussehra",
  "2026-10-21": "Bathukamma",
  "2026-11-08": "Diwali",
  "2026-11-24": "Guru Nanak Jayanti",
  "2026-12-25": "Christmas"
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateMonth(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dates = [];

  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(day);
  }

  return dates;
}

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>🇮🇳 Indian Festival & Holiday Calendar 2026</h1>
        <p>
          Weekends are highlighted in blue and Indian holidays/festivals are highlighted in red.
        </p>
      </header>

      <div className="legend">
        <div><span className="legend-box weekend"></span> Weekend</div>
        <div><span className="legend-box holiday"></span> Holiday / Festival</div>
      </div>

      <div className="calendar-grid">
        {monthNames.map((month, monthIndex) => {
          const dates = generateMonth(2026, monthIndex);

          return (
            <div key={month} className="month-card">
              <h2>{month}</h2>

              <div className="week-grid">
                {weekDays.map((day) => (
                  <div key={day} className="week-day">{day}</div>
                ))}

                {dates.map((date, index) => {
                  if (!date) {
                    return <div key={index} className="empty-cell"></div>;
                  }

                  const formattedDate = `2026-${String(monthIndex + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;

                  const currentDate = new Date(2026, monthIndex, date);
                  const dayOfWeek = currentDate.getDay();

                  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                  const holidayName = holidays[formattedDate];

                  return (
                    <div
                      key={formattedDate}
                      className={`date-cell 
                        ${isWeekend ? "weekend-cell" : ""} 
                        ${holidayName ? "holiday-cell" : ""}
                      `}
                    >
                      <div className="date-number">{date}</div>

                      {holidayName && (
                        <div className="holiday-text">
                          {holidayName}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}