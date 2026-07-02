import './styles.css'

const festivals = [
  { date: 'Jan 14', name: 'Makar Sankranti' },
  { date: 'Feb 15', name: 'Maha Shivaratri' },
  { date: 'Mar 14', name: 'Holi' },
  { date: 'Apr 6', name: 'Rama Navami' },
  { date: 'Apr 10', name: 'Mahavir Jayanti' },
  { date: 'Apr 14', name: 'Ambedkar Jayanti' },
  { date: 'Apr 21', name: 'Ram Navami' },
  { date: 'May 1', name: 'Labour Day' },
  { date: 'Jun 6', name: 'Id-ul-Adha' },
  { date: 'Aug 15', name: 'Independence Day' },
  { date: 'Aug 16', name: 'Janmashtami' },
  { date: 'Oct 2', name: 'Gandhi Jayanti' },
  { date: 'Oct 20', name: 'Diwali' },
  { date: 'Dec 25', name: 'Christmas' }
]

export default function App() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Indian Calendar 2026</p>
        <h1>Festivals and important dates</h1>
        <p className="intro">A simple Vite + React app for showcasing the 2026 Indian calendar events.</p>
        <ul className="list">
          {festivals.map((festival) => (
            <li key={festival.name}>
              <span>{festival.date}</span>
              <strong>{festival.name}</strong>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
