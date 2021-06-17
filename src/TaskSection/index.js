import "./style.css";

const TaskSection = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__container">
      <h2 className="section__header">{title}</h2>
      {extraHeaderContent}
    </div>
    <div className="section__item">
      {body}
    </div>
  </section>
);

export default TaskSection;