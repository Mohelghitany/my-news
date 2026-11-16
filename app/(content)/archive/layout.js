import classes from "./layout.module.css";

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div className={classes.page}>
      <div className={classes.archive}>{archive}</div>
      <div className={classes.latest}>{latest}</div>
    </div>
  );
}
