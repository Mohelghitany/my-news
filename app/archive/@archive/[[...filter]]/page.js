import Link from "next/link";
import NewsList from "@/components/NewsList/page";
import {
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import classes from "./page.module.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function monthName(month) {
  return MONTHS[Number(month) - 1];
}

export default function ArchivePage({ params }) {
  const filter = params.filter ?? [];
  const selectedYear = filter[0];
  const selectedMonth = filter[1];
  const years = getAvailableNewsYears();
  const months = selectedYear ? getAvailableNewsMonths(selectedYear) : [];
  const yearIsKnown = years.some((year) => String(year) === selectedYear);
  const monthIsKnown = months.some((month) => String(month) === selectedMonth);

  if (filter.length > 2) {
    throw new Error("That page is not in the archive.");
  }

  if (selectedYear && !yearIsKnown) {
    throw new Error(`${selectedYear} is not in the archive.`);
  }

  if (selectedMonth && !monthIsKnown) {
    const name = monthName(selectedMonth);
    throw new Error(
      name
        ? `${name} ${selectedYear} is not in the archive.`
        : "That month is not in the archive.",
    );
  }

  let news;
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  let period = "the archive";
  if (selectedYear && selectedMonth) {
    period = `${monthName(selectedMonth)} ${selectedYear}`;
  } else if (selectedYear) {
    period = selectedYear;
  }

  return (
    <section>
      <header className={classes.header}>
        <h1 className={classes.heading}>Archive</h1>
        <nav aria-label="Years">
          <ul className={classes.years}>
            {years.map((year) => {
              const current = String(year) === selectedYear;
              return (
                <li key={year}>
                  <Link
                    href={`/archive/${year}`}
                    className={
                      current ? `${classes.link} ${classes.current}` : classes.link
                    }
                    aria-current={current ? "page" : undefined}
                  >
                    {year}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {selectedYear && (
          <nav aria-label="Months">
            <ul className={classes.months}>
              {months.map((month) => {
                const current = String(month) === selectedMonth;
                return (
                  <li key={month}>
                    <Link
                      href={`/archive/${selectedYear}/${month}`}
                      className={
                        current
                          ? `${classes.month} ${classes.current}`
                          : classes.month
                      }
                      aria-current={current ? "page" : undefined}
                    >
                      {monthName(month)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
      {news?.length ? (
        <NewsList news={news} />
      ) : (
        <p className={classes.prompt}>
          {selectedYear
            ? `No stories filed for ${period}.`
            : "Pick a year to open that part of the archive."}
        </p>
      )}
    </section>
  );
}
