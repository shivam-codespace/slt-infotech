import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Clock, UserCheck, Video } from "lucide-react";
import Logo from "./Logo";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
const MONTHS_AHEAD = 3;
const AGENDA = ["Your goals and current systems", "Constraints, timeline, and budget", "A recommended next step"];

function buildMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export default function BookingWidget() {
  const navigate = useNavigate();
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "your local time";

  const [cursor, setCursor] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const cells = useMemo(() => buildMonthGrid(cursor.year, cursor.month), [cursor]);
  const monthLabel = new Date(cursor.year, cursor.month, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const monthOffset = (cursor.year - today.getFullYear()) * 12 + (cursor.month - today.getMonth());

  const dateFor = (day) => new Date(cursor.year, cursor.month, day);

  // Calls can be booked from tomorrow onward, on weekdays only.
  const isUnavailable = (day) => {
    const d = dateFor(day);
    const weekend = d.getDay() === 0 || d.getDay() === 6;
    return weekend || d <= startOfToday;
  };

  function changeMonth(delta) {
    setSelectedDay(null);
    setSelectedTime(null);
    setCursor((c) => {
      const next = new Date(c.year, c.month + delta, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  }

  const selectedLabel =
    selectedDay &&
    dateFor(selectedDay).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  function continueToForm() {
    const slot = `${selectedLabel} at ${selectedTime} (${timeZone})`;
    navigate(`/start-collaboration?slot=${encodeURIComponent(slot)}`);
  }

  return (
    <section className="booking-section" id="booking">
      <div className="container">
        <div className="booking-widget">
          <div className="booking-side">
            <Logo className="brand-mark" />
            <span className="booking-brand">SLT Info Tech</span>
            <h3>30-minute discovery call</h3>
            <ul className="booking-meta">
              <li>
                <Clock size={16} aria-hidden="true" /> 30 minutes
              </li>
              <li>
                <Video size={16} aria-hidden="true" /> Video call — link sent on confirmation
              </li>
              <li>
                <UserCheck size={16} aria-hidden="true" /> With a senior lead, not a sales rep
              </li>
            </ul>
            <div className="booking-agenda">
              <span className="info-label">What we'll cover</span>
              <ul>
                {AGENDA.map((item) => (
                  <li key={item}>
                    <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="booking-calendar">
            <div className="calendar-header">
              <h4>Select a date &amp; time</h4>
              <div className="calendar-nav">
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  aria-label="Previous month"
                  disabled={monthOffset <= 0}
                >
                  <ChevronLeft size={16} />
                </button>
                <span aria-live="polite">{monthLabel}</span>
                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  aria-label="Next month"
                  disabled={monthOffset >= MONTHS_AHEAD - 1}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="calendar-grid">
              {WEEKDAYS.map((d) => (
                <span className="calendar-weekday" key={d}>
                  {d}
                </span>
              ))}
              {cells.map((day, i) =>
                day === null ? (
                  <span key={i} />
                ) : (
                  <button
                    type="button"
                    key={i}
                    className={selectedDay === day ? "calendar-day selected" : "calendar-day"}
                    disabled={isUnavailable(day)}
                    aria-pressed={selectedDay === day}
                    aria-label={dateFor(day).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedTime(null);
                    }}
                  >
                    {day}
                  </button>
                )
              )}
            </div>

            {selectedDay ? (
              <div className="time-slots" role="group" aria-label="Available times">
                {TIMES.map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={selectedTime === t ? "time-slot selected" : "time-slot"}
                    aria-pressed={selectedTime === t}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            ) : (
              <p className="calendar-hint">Pick a weekday to see available times.</p>
            )}

            <div className="calendar-footer">
              <span>Times shown in {timeZone}</span>
              {selectedDay && selectedTime && (
                <div className="booking-confirm-row">
                  <span className="booking-confirm">
                    {selectedLabel} at {selectedTime}
                  </span>
                  <button type="button" className="btn btn-primary btn-sm" onClick={continueToForm}>
                    Continue <ArrowRight className="btn-arrow" size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
