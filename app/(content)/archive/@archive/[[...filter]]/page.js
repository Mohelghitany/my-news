import { Suspense } from "react";
import Link from "next/link";
import NewsList from "@/components/NewsList/page";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
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

function periodLabel(year, month) {
  return month ? `${monthName(month)} ${year}` : year;
}

function assertKnownYear(years, year) {
  if (year && !years.some((item) => String(item) === year)) {
    throw new Error(`${year} is not in the archive.`);
  }
}

function assertKnownMonth(months, year, month) {
  if (!month || months.some((item) => String(item) === month)) {
    return;
  }

  const name = monthName(month);
  throw new Error(
    name
      ? `${name} ${year} is not in the archive.`
      : "That month is not in the archive.",
  );
}

function FilterLink({ href, className, current, children }) {
  return (
    <Link
      href={href}
      className={current ? `${className} ${classes.current}` : className}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function YearList({ years, selectedYear }) {
  return (
    <ul className={classes.years}>
      {years.map((year) => (
        <li key={year}>
          <FilterLink
            href={`/archive/${year}`}
            className={classes.link}
            current={String(year) === selectedYear}
          >
            {year}
          </FilterLink>
        </li>
      ))}
    </ul>
  );
}

function MonthList({ year, months, selectedMonth }) {
  return (
    <ul className={classes.months}>
      {months.map((month) => (
        <li key={month}>
          <FilterLink
            href={`/archive/${year}/${month}`}
            className={classes.month}
            current={String(month) === selectedMonth}
          >
            {monthName(month)}
          </FilterLink>
        </li>
      ))}
    </ul>
  );
}

async function YearNav({ selectedYear }) {
  const years = await getAvailableNewsYears();
  assertKnownYear(years, selectedYear);
  return <YearList years={years} selectedYear={selectedYear} />;
}

async function MonthNav({ year, selectedMonth }) {
  const [years, months] = await Promise.all([
    getAvailableNewsYears(),
    getAvailableNewsMonths(year),
  ]);

  assertKnownYear(years, year);
  assertKnownMonth(months, year, selectedMonth);

  return (
    <MonthList year={year} months={months} selectedMonth={selectedMonth} />
  );
}

async function ArchiveStories({ year, month }) {
  if (!year) {
    return (
      <p className={classes.prompt}>
        Pick a year to open that part of the archive.
      </p>
    );
  }

  const [years, months, news] = await Promise.all([
    getAvailableNewsYears(),
    month ? getAvailableNewsMonths(year) : Promise.resolve([]),
    month ? getNewsForYearAndMonth(year, month) : getNewsForYear(year),
  ]);

  assertKnownYear(years, year);
  assertKnownMonth(months, year, month);

  const stories = Array.isArray(news) ? news : [];

  if (!stories.length) {
    return (
      <p className={classes.prompt}>
        No stories filed for {periodLabel(year, month)}.
      </p>
    );
  }

  return <NewsList news={stories} />;
}

export default function ArchivePage({ params }) {
  const filter = params.filter ?? [];

  if (filter.length > 2) {
    throw new Error("That page is not in the archive.");
  }

  const [selectedYear, selectedMonth] = filter;

  return (
    <section>
      <header className={classes.header}>
        <h1 className={classes.heading}>Archive</h1>
        <nav aria-label="Years">
          <Suspense fallback={<p className={classes.prompt}>Loading years...</p>}>
            <YearNav selectedYear={selectedYear} />
          </Suspense>
        </nav>
        {selectedYear ? (
          <nav aria-label="Months">
            <Suspense
              fallback={<p className={classes.prompt}>Loading months...</p>}
            >
              <MonthNav year={selectedYear} selectedMonth={selectedMonth} />
            </Suspense>
          </nav>
        ) : null}
      </header>
      <Suspense fallback={<p className={classes.prompt}>Loading news...</p>}>
        <ArchiveStories year={selectedYear} month={selectedMonth} />
      </Suspense>
    </section>
  );
}
